import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { GlowingBorder } from '@/components/ui/glowing-border';
import { motion, type Variants } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter menos de 100 caracteres"),
  company: z.string().trim().min(1, "Empresa é obrigatória").max(100, "Nome da empresa deve ter menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter menos de 255 caracteres"),
  phone: z.string().trim().optional(),
  message: z.string().trim().max(1000, "Mensagem deve ter menos de 1000 caracteres").optional(),
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const inputClasses = (fieldName: string) => `
    bg-muted/20 border-muted text-white placeholder:text-muted-foreground
    transition-all duration-300 ease-out
    ${focusedField === fieldName 
      ? 'border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)] scale-[1.02]' 
      : 'hover:border-primary/50 hover:bg-muted/30'
    }
  `;

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Está pronto para transformar seu negócio com IA? Nossa equipe está aqui para 
            desenhar a solução perfeita para sua empresa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GlowingBorder containerClassName="h-full" className="h-full">
              <div className="glass h-full rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Solicite sua demonstração
                </motion.h3>
                
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div variants={inputVariants}>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Nome *
                      </label>
                      <Input 
                        name="name"
                        required 
                        placeholder="Seu nome completo"
                        className={inputClasses('name')}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                      {errors.name && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>
                    <motion.div variants={inputVariants}>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Empresa *
                      </label>
                      <Input 
                        name="company"
                        required 
                        placeholder="Nome da empresa"
                        className={inputClasses('company')}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                      {errors.company && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.company}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div variants={inputVariants}>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Email *
                      </label>
                      <Input 
                        name="email"
                        type="email" 
                        required 
                        placeholder="seu@email.com"
                        className={inputClasses('email')}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                      {errors.email && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                    <motion.div variants={inputVariants}>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Telefone
                      </label>
                      <Input 
                        name="phone"
                        placeholder="(11) 99999-9999"
                        className={inputClasses('phone')}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                      />
                      {errors.phone && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div variants={inputVariants}>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Conte-nos sobre seu desafio
                    </label>
                    <Textarea 
                      name="message"
                      placeholder="Descreva como podemos ajudar sua empresa..."
                      rows={4}
                      className={inputClasses('message')}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                    {errors.message && (
                      <motion.p 
                        className="text-red-400 text-sm mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={inputVariants}>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 text-white font-semibold py-3 rounded-full shadow-glow hover:scale-105 group"
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Enviando...
                        </motion.span>
                      ) : (
                        <>
                          Solicitar Demonstração
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              </div>
            </GlowingBorder>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Quick Contact */}
            <motion.div variants={itemVariants}>
              <GlowingBorder containerClassName="h-auto">
                <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Fale conosco diretamente</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Phone, title: "Telefone", value: "+351 960 263 588" },
                      { icon: Mail, title: "Email", value: "info@victaaisolutions.com" },
                      { icon: MapPin, title: "Localização", value: "Porto, Portugal" },
                    ].map((item, index) => (
                      <motion.div 
                        key={item.title}
                        className="flex items-center space-x-4 group cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <div className="text-white font-semibold group-hover:text-primary transition-colors">{item.title}</div>
                          <div className="text-muted-foreground">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlowingBorder>
            </motion.div>

            {/* CTA Card */}
            <motion.div variants={itemVariants}>
              <GlowingBorder containerClassName="h-auto">
                <div className="bg-gradient-primary rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-glow overflow-hidden relative">
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      Resposta em até 24 horas
                    </h3>
                    <p className="text-white/90 mb-6">
                      Nossa equipe de especialistas está pronta para entender suas necessidades 
                      e propor a melhor solução em IA para seu negócio.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      {[
                        { value: "100%", label: "Gratuito" },
                        { value: "30min", label: "Demonstração" },
                      ].map((stat, index) => (
                        <motion.div 
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-white/70 text-sm">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowingBorder>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;