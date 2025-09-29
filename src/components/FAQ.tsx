import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Em quanto tempo verei resultados?',
    answer: 'Em até 30 dias, na maioria dos projetos. Implementamos soluções que geram impacto imediato, com melhorias contínuas ao longo do tempo.'
  },
  {
    question: 'Preciso de equipa de tecnologia interna?',
    answer: 'Não, a VICTA trata da implementação e suporte. Nossa equipe especializada cuida de todo o processo técnico, desde o desenvolvimento até a manutenção.'
  },
  {
    question: 'Quais sectores podem usar as soluções da VICTA?',
    answer: 'Retalho, serviços, financeiro, saúde e muito mais. Nossas soluções são adaptáveis a qualquer sector que busque automatização e eficiência.'
  },
  {
    question: 'Qual é o investimento necessário?',
    answer: 'O investimento varia conforme a complexidade e escopo do projeto. Oferecemos soluções escaláveis que se adequam ao orçamento e necessidades da sua empresa.'
  },
  {
    question: 'Como garantem a segurança dos dados?',
    answer: 'Utilizamos protocolos de segurança avançados, criptografia end-to-end e compliance total com LGPD. Seus dados estão sempre protegidos e seguros.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre as nossas soluções de IA empresarial.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-muted/20 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;