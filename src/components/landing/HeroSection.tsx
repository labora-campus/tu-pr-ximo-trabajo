import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { CompanyLogos } from "@/components/landing/CompanyLogos";



export const HeroSection = () => {
  const scrollToWizard = () => {
    document.getElementById('wizard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              +314K seguidores en Instagram
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up delay-100 text-balance">
            Conseguí trabajo con un CV que{" "}
            <span className="text-accent">realmente funciona</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200 text-balance">
            Ya ayudé a +5,000 personas a conseguir trabajo en empresas como Prosegur, Aerolíneas, Jumbo y más.
            <strong className="text-primary-foreground"> Ahora te toca a vos.</strong>
          </p>

          {/* Video placeholder */}
          <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300">
            <div className="aspect-video bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 flex items-center justify-center cursor-pointer group hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-accent">
                <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
              </div>
              <span className="absolute bottom-4 text-primary-foreground/60 text-sm">
                Mirá cómo funciona
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToWizard}
            className="btn-accent text-lg px-10 py-6 h-auto animate-fade-in-up delay-400"
          >
            QUIERO MI CV PROFESIONAL
          </Button>
        </div>

        {/* Company logos */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/50 text-sm mb-6 uppercase tracking-wider animate-fade-in delay-500">
            Empresas donde nuestros clientes consiguieron trabajo
          </p>
          <div className="animate-fade-in delay-600">
            <CompanyLogos />
          </div>
        </div>
      </div>
    </section>
  );
};
