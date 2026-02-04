import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda el CV?",
    answer: "Entregamos en 72 horas hábiles desde que completás el formulario. Si lo necesitás más rápido, escribinos por WhatsApp."
  },
  {
    question: "¿Qué información necesitan?",
    answer: "Tus datos personales, experiencia laboral, estudios y habilidades. Todo lo completás en un formulario simple que te guía paso a paso."
  },
  {
    question: "¿Qué pasa si no tengo experiencia?",
    answer: "No te preocupes, armamos CVs para personas sin experiencia destacando tus habilidades, formación y potencial. Muchos de nuestros clientes consiguieron su primer trabajo con nosotros."
  },
  {
    question: "¿Cómo pago?",
    answer: "Por Mercado Pago. Podés pagar con tarjeta de crédito, débito, o transferencia bancaria. El pago es 100% seguro."
  },
  {
    question: "¿Puedo hacer cambios después?",
    answer: "Sí, incluimos una revisión sin costo adicional. Si necesitás modificar algo de tu CV, lo hacemos sin problema."
  },
  {
    question: "¿En qué formato recibo el CV?",
    answer: "Recibís tu CV en formato Word (editable) y PDF, listo para enviar a cualquier empresa."
  }
];

export const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitás saber antes de empezar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
