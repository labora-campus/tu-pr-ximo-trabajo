import { useState, useMemo } from "react";
import { Check, ChevronRight, ChevronLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CVType = "profesional" | "harvard" | "diseno" | null;

interface Selection {
  cvType: CVType;
  linkedin: boolean;
  portales: boolean;
}

const cvOptions = [
  {
    id: "profesional" as const,
    name: "CV Profesional",
    price: 18000,
    description: "Formato clásico y efectivo"
  },
  {
    id: "harvard" as const,
    name: "CV Harvard",
    price: 18000,
    description: "Estructura académica reconocida"
  },
  {
    id: "diseno" as const,
    name: "CV con Diseño",
    price: 20000,
    description: "Visualmente atractivo y moderno"
  }
];

const addons = [
  {
    id: "linkedin",
    name: "Optimización de LinkedIn",
    price: 17000,
    description: "Perfil optimizado para reclutadores"
  },
  {
    id: "portales",
    name: "Postulación en 2 portales de empleo",
    price: 23000,
    description: "Bumeran y Grupo Gestión"
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

export const PricingWizard = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState<Selection>({
    cvType: null,
    linkedin: false,
    portales: false
  });

  const calculateTotal = useMemo(() => {
    if (!selection.cvType) return 0;

    const cvPrice = cvOptions.find(cv => cv.id === selection.cvType)?.price || 0;
    
    // Combo pricing
    if (selection.linkedin && selection.portales) {
      // CV + LinkedIn + Portales
      return cvPrice + 30000 + 23000 - 17000; // LinkedIn combo price
    } else if (selection.linkedin) {
      // CV + LinkedIn = $30,000 combo
      return 30000;
    } else if (selection.portales) {
      // CV + Portales = $41,000 combo  
      return 41000;
    }
    
    return cvPrice;
  }, [selection]);

  const getOriginalTotal = useMemo(() => {
    if (!selection.cvType) return 0;
    
    let total = cvOptions.find(cv => cv.id === selection.cvType)?.price || 0;
    if (selection.linkedin) total += 17000;
    if (selection.portales) total += 23000;
    
    return total;
  }, [selection]);

  const savings = getOriginalTotal - calculateTotal;

  const canProceed = () => {
    if (step === 1) return selection.cvType !== null;
    return true;
  };

  const steps = [
    { number: 1, title: "Elegí tu CV" },
    { number: 2, title: "Extras" },
    { number: 3, title: "Resumen" }
  ];

  return (
    <section id="wizard" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Armá tu CV ahora
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí el servicio que mejor se adapte a lo que necesitás
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Step indicator */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div 
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full font-bold transition-colors",
                    step >= s.number 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {step > s.number ? <Check className="w-5 h-5" /> : s.number}
                </div>
                <span className={cn(
                  "ml-2 text-sm font-medium hidden sm:inline",
                  step >= s.number ? "text-foreground" : "text-muted-foreground"
                )}>
                  {s.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-12 sm:w-20 h-0.5 mx-3",
                    step > s.number ? "bg-primary" : "bg-muted"
                  )} />
                )}
              </div>
            ))}
          </div>

          {/* Wizard content */}
          <div className="card-elevated p-6 md:p-8">
            {/* Step 1: Choose CV Type */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  ¿Qué tipo de CV querés?
                </h3>
                
                {cvOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelection({ ...selection, cvType: option.id })}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                      selection.cvType === option.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{option.name}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(option.price)}
                        </span>
                        <div className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                          selection.cvType === option.id
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        )}>
                          {selection.cvType === option.id && (
                            <Check className="w-4 h-4 text-primary-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Choose Addons */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  ¿Querés agregar algo más?
                </h3>
                
                {addons.map((addon) => {
                  const isSelected = addon.id === "linkedin" ? selection.linkedin : selection.portales;
                  const comboPrice = addon.id === "linkedin" ? 30000 : 41000;
                  
                  return (
                    <button
                      key={addon.id}
                      onClick={() => setSelection({ 
                        ...selection, 
                        [addon.id]: !isSelected 
                      })}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                        isSelected
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{addon.name}</h4>
                          <p className="text-sm text-muted-foreground">{addon.description}</p>
                          {isSelected && (
                            <p className="text-sm text-accent font-medium mt-1">
                              ✨ Combo CV + {addon.id === "linkedin" ? "LinkedIn" : "Portales"}: {formatPrice(comboPrice)}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-xl font-bold text-primary">
                              +{formatPrice(addon.price)}
                            </span>
                          </div>
                          <div className={cn(
                            "w-6 h-6 rounded border-2 flex items-center justify-center",
                            isSelected
                              ? "border-accent bg-accent"
                              : "border-muted-foreground"
                          )}>
                            {isSelected && (
                              <Check className="w-4 h-4 text-accent-foreground" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  💡 Tip: Podés saltear este paso si solo querés el CV
                </p>
              </div>
            )}

            {/* Step 3: Summary */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Resumen de tu pedido
                </h3>
                
                <div className="space-y-4 mb-6">
                  {/* Selected CV */}
                  {selection.cvType && (
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-xl">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-medium">
                          {cvOptions.find(cv => cv.id === selection.cvType)?.name}
                        </span>
                      </div>
                      <span className="text-muted-foreground">
                        {formatPrice(cvOptions.find(cv => cv.id === selection.cvType)?.price || 0)}
                      </span>
                    </div>
                  )}
                  
                  {/* Selected Addons */}
                  {selection.linkedin && (
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-xl">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-medium">Optimización de LinkedIn</span>
                      </div>
                      <span className="text-muted-foreground">{formatPrice(17000)}</span>
                    </div>
                  )}
                  
                  {selection.portales && (
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-xl">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-medium">Postulación en 2 portales</span>
                      </div>
                      <span className="text-muted-foreground">{formatPrice(23000)}</span>
                    </div>
                  )}
                </div>

                {/* Savings */}
                {savings > 0 && (
                  <div className="bg-success/10 text-success rounded-xl p-4 mb-6 text-center">
                    <span className="font-semibold">🎉 ¡Ahorrás {formatPrice(savings)} con el combo!</span>
                  </div>
                )}

                {/* Total */}
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total a pagar:</span>
                    <div className="text-right">
                      {savings > 0 && (
                        <span className="text-sm text-muted-foreground line-through block">
                          {formatPrice(getOriginalTotal)}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-primary">
                        {formatPrice(calculateTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <Button 
                  className="btn-accent w-full text-lg py-6 h-auto"
                  onClick={() => window.open('#mercadopago-placeholder', '_blank')}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  PAGAR CON MERCADO PAGO
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  🔒 Pago 100% seguro a través de Mercado Pago
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Anterior
                </Button>
              ) : (
                <div />
              )}
              
              {step < 3 && (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90"
                >
                  {step === 2 ? "Ver resumen" : "Siguiente"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
