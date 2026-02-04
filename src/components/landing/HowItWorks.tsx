import { MousePointerClick, ClipboardList, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    number: "1",
    title: "Elegí tu servicio",
    description: "Seleccioná el tipo de CV y servicios adicionales que necesitás"
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Completá tus datos",
    description: "Llenás un formulario simple con tu información laboral"
  },
  {
    icon: FileCheck,
    number: "3",
    title: "Recibí tu CV",
    description: "En 72hs hábiles tenés tu CV profesional listo"
  }
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En 3 simples pasos tenés tu CV profesional listo para conseguir trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="card-elevated p-8 text-center h-full">
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
