import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const resendApiKey = Deno.env.get('RESEND_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEmailRequest {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
}

function validateContactData(data: any): ContactEmailRequest {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    throw new Error('Nome é obrigatório');
  }
  if (!data.company || typeof data.company !== 'string' || data.company.trim().length === 0) {
    throw new Error('Empresa é obrigatória');
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    throw new Error('Email válido é obrigatório');
  }
  
  // Validate email format more strictly
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Formato de email inválido');
  }

  // Validate lengths
  if (data.name.length > 100) {
    throw new Error('Nome deve ter menos de 100 caracteres');
  }
  if (data.company.length > 100) {
    throw new Error('Nome da empresa deve ter menos de 100 caracteres');
  }
  if (data.email.length > 255) {
    throw new Error('Email deve ter menos de 255 caracteres');
  }
  if (data.message && data.message.length > 1000) {
    throw new Error('Mensagem deve ter menos de 1000 caracteres');
  }

  return {
    name: data.name.trim(),
    company: data.company.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone?.trim() || null,
    message: data.message?.trim() || null,
  };
}

async function sendEmail(to: string[], subject: string, html: string, from = 'VICTA <info@victaaisolutions.com>') {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
    }),
  });

  const result = await response.json();
  
  if (!response.ok) {
    console.error('Resend API error:', result);
    throw new Error(`Erro ao enviar email: ${result.message || 'Erro desconhecido'}`);
  }

  return result;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received contact form submission');

    const requestData = await req.json();
    console.log('Request data:', { ...requestData, email: '[REDACTED]' });

    // Validate the incoming data
    const contactData = validateContactData(requestData);
    console.log('Validated contact data:', { ...contactData, email: '[REDACTED]' });

    // Initialize Supabase client with service role key for database operations
    const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

    // Store the contact submission in the database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([contactData])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Erro ao salvar dados de contato');
    }

    console.log('Contact submission saved to database:', submission.id);

    // Email 1: Notification to VICTA team
    const notificationEmailHTML = `
      <h1>Nova Solicitação de Demonstração - VICTA</h1>
      
      <h2>Dados do Cliente:</h2>
      <p><strong>Nome:</strong> ${contactData.name}</p>
      <p><strong>Empresa:</strong> ${contactData.company}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      ${contactData.phone ? `<p><strong>Telefone:</strong> ${contactData.phone}</p>` : ''}
      
      ${contactData.message ? `
        <h2>Mensagem:</h2>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      <hr>
      <p><small>Lead ID: ${submission.id}</small></p>
      <p><small>Data: ${new Date().toLocaleString('pt-BR')}</small></p>
    `;

    // Email 2: Auto-confirmation to client
    const confirmationEmailHTML = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">VICTA</h1>
          <p style="color: white; margin: 10px 0 0 0;">Soluções em Inteligência Artificial</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <h2 style="color: #333;">Olá, ${contactData.name}!</h2>
          
          <p>Recebemos sua solicitação de demonstração e ficamos muito felizes com seu interesse em nossas soluções de IA.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Próximos Passos:</h3>
            <ul style="color: #555;">
              <li>Nossa equipe analisará suas necessidades</li>
              <li>Entraremos em contato em até 24 horas</li>
              <li>Agendaremos uma demonstração personalizada</li>
              <li>Apresentaremos a solução ideal para ${contactData.company}</li>
            </ul>
          </div>
          
          <p>Enquanto isso, você pode conhecer mais sobre nossas soluções em nosso site.</p>
          
          <p style="margin-top: 30px;">
            <strong>Atenciosamente,</strong><br>
            Equipe VICTA
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>Este é um email automático. Se você não solicitou esta demonstração, pode ignorar esta mensagem.</p>
          <p>VICTA - Transformando negócios com Inteligência Artificial</p>
        </div>
      </div>
    `;

    // Send both emails in parallel
    const [notificationResult, confirmationResult] = await Promise.all([
      // Notification email to VICTA team
      sendEmail(
        ['info@victaaisolutions.com'],
        `Nova Solicitação: ${contactData.name} - ${contactData.company}`,
        notificationEmailHTML
      ),

      // Confirmation email to client
      sendEmail(
        [contactData.email],
        'Demonstração VICTA - Confirmação de Recebimento',
        confirmationEmailHTML
      ),
    ]);

    console.log('Notification email sent:', notificationResult);
    console.log('Confirmation email sent:', confirmationResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Emails enviados com sucesso',
        submissionId: submission.id 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ 
        error: true, 
        message: error.message || 'Erro interno do servidor' 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);