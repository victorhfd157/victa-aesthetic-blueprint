import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, voiceId } = await req.json();
    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY_2') || Deno.env.get('ELEVENLABS_API_KEY_1') || Deno.env.get('ELEVENLABS_API_KEY');

    if (!ELEVENLABS_API_KEY) {
      console.error('ELEVENLABS_API_KEY is not configured');
      throw new Error('ELEVENLABS_API_KEY is not configured');
    }

    if (!text) {
      throw new Error('Text is required');
    }

    // Default to "George" voice - clear British English, great for education
    const selectedVoiceId = voiceId || 'JBFqnCBsd6RMkjVDRZzb';

    console.log(`Generating TTS for text: "${text.substring(0, 50)}..." with voice: ${selectedVoiceId}`);

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${selectedVoiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_multilingual_v2',
          output_format: 'mp3_44100_128',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.5,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      let parsed: unknown = errorText;
      try {
        parsed = JSON.parse(errorText);
      } catch {
        // keep raw text
      }

      console.error('ElevenLabs API error:', response.status, parsed);

      // Pass through provider status so the client can decide to fall back gracefully
      return new Response(
        JSON.stringify({
          error: 'ElevenLabs API error',
          elevenlabs_status: response.status,
          elevenlabs_body: parsed,
        }),
        {
          status: response.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const audioBuffer = await response.arrayBuffer();
    const base64Audio = base64Encode(audioBuffer);

    console.log('TTS generated successfully, audio size:', audioBuffer.byteLength);

    return new Response(
      JSON.stringify({ audioContent: base64Audio }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in elevenlabs-tts function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
