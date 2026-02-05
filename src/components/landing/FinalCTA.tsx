import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  const scrollToWizard = () => {
    document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            ¿Listo para conseguir ese trabajo que querés?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            No dejes pasar más oportunidades. Armá tu CV profesional hoy y empezá a recibir más entrevistas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToWizard}
              className="btn-accent text-lg px-10 py-6 h-auto"
            >
              EMPEZAR AHORA
            </Button>

            <Button
              variant="outline"
              onClick={() => window.open('https://wa.me/5491150538808', '_blank')}
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6 h-auto text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Tengo una duda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
