import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter menos de 100 caracteres"),
  company: z.string().trim().min(1, "Empresa é obrigatória").max(100, "Nome da empresa deve ter menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter menos de 255 caracteres"),
  phone: z.string().trim().optional(),
  message: z.string().trim().max(1000, "Mensagem deve ter menos de 1000 caracteres").optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        company: formData.get('company') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
      };

      // Validate client-side
      const validatedData = contactSchema.parse(data);

      // Call edge function
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData,
      });

      if (error) {
        throw new Error(error.message || 'Erro ao enviar mensagem');
      }

      if (result?.error) {
        throw new Error(result.message || 'Erro ao enviar mensagem');
      }

      // Success
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      if (error.issues) {
        // Zod validation errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue: any) => {
          fieldErrors[issue.path[0]] = issue.message;
        });
        setErrors(fieldErrors);
      } else {
        // Other errors
        toast({
          title: "Erro ao enviar mensagem",
          description: error.message || "Tente novamente em alguns instantes.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Está pronto para transformar seu negócio com IA? Nossa equipe está aqui para 
            desenhar a solução perfeita para sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Solicite sua demonstração</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Nome *
                  </label>
                  <Input 
                    name="name"
                    required 
                    placeholder="Seu nome completo"
                    className="bg-muted/20 border-muted text-white placeholder:text-muted-foreground"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Empresa *
                  </label>
                  <Input 
                    name="company"
                    required 
                    placeholder="Nome da empresa"
                    className="bg-muted/20 border-muted text-white placeholder:text-muted-foreground"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                  )}
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    required 
                    placeholder="seu@email.com"
                    className="bg-muted/20 border-muted text-white placeholder:text-muted-foreground"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input 
                    name="phone"
                    placeholder="(11) 99999-9999"
                    className="bg-muted/20 border-muted text-white placeholder:text-muted-foreground"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Conte-nos sobre seu desafio
                </label>
                <Textarea 
                  name="message"
                  placeholder="Descreva como podemos ajudar sua empresa..."
                  rows={4}
                  className="bg-muted/20 border-muted text-white placeholder:text-muted-foreground"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold py-3 rounded-full shadow-glow hover:scale-105 group"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Solicitar Demonstração
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Quick Contact */}
            <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Fale conosco diretamente</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telefone</div>
                    <div className="text-muted-foreground">+55 (11) 9 9999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-muted-foreground">info@victaaisolutions.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Localização</div>
                    <div className="text-muted-foreground">São Paulo, Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-primary rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-glow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Resposta em até 24 horas
              </h3>
              <p className="text-white/90 mb-6">
                Nossa equipe de especialistas está pronta para entender suas necessidades 
                e propor a melhor solução em IA para seu negócio.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-white/70 text-sm">Gratuito</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">30min</div>
                  <div className="text-white/70 text-sm">Demonstração</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;