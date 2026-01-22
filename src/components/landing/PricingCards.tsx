import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "CV Profesional",
    price: 18000,
    subtitle: "Ideal para empezar",
    popular: false,
    features: [
      "CV profesional completo",
      "Entrega en 24hs",
      "1 revisión incluida",
      "Formato Word + PDF"
    ]
  },
  {
    name: "CV + LinkedIn",
    price: 30000,
    originalPrice: 35000,
    subtitle: "Más completo",
    popular: true,
    features: [
      "CV profesional completo",
      "Optimización de LinkedIn",
      "Entrega en 24hs",
      "1 revisión incluida",
      "Perfil destacado"
    ]
  },
  {
    name: "CV + 2 Portales",
    price: 41000,
    subtitle: "Máximas oportunidades",
    popular: false,
    features: [
      "CV profesional completo",
      "Postulación en Bumeran",
      "Postulación en Grupo Gestión",
      "Entrega en 24hs",
      "1 revisión incluida"
    ]
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price).replace('ARS', '$');
};

export const PricingCards = () => {
  const scrollToWizard = () => {
    document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Elegí tu plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precios claros sin costos ocultos. ¡Empezá hoy!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative rounded-2xl p-6 lg:p-8 transition-all duration-300",
                plan.popular 
                  ? "bg-primary text-primary-foreground scale-105 shadow-xl z-10" 
                  : "card-elevated bg-card"
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
                  <Star className="w-4 h-4" fill="currentColor" />
                  MÁS ELEGIDO
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={cn(
                  "text-xl font-bold mb-2",
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                )}>
                  {plan.name}
                </h3>
                <p className={cn(
                  "text-sm mb-4",
                  plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {plan.subtitle}
                </p>
                
                <div className="flex items-center justify-center gap-2">
                  {plan.originalPrice && (
                    <span className={cn(
                      "text-lg line-through",
                      plan.popular ? "text-primary-foreground/50" : "text-muted-foreground"
                    )}>
                      {formatPrice(plan.originalPrice)}
                    </span>
                  )}
                  <span className={cn(
                    "text-4xl font-extrabold",
                    plan.popular ? "text-primary-foreground" : "text-primary"
                  )}>
                    {formatPrice(plan.price)}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                      plan.popular ? "bg-primary-foreground/20" : "bg-success/20"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        plan.popular ? "text-primary-foreground" : "text-success"
                      )} />
                    </div>
                    <span className={cn(
                      "text-sm",
                      plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToWizard}
                className={cn(
                  "w-full py-6 h-auto font-semibold",
                  plan.popular 
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                )}
              >
                ELEGIR
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
