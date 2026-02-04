import { Button } from "@/components/ui/button";
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
              +20,000 personas ya confiaron en nosotros
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up delay-100 text-balance">
            Aumentá tus oportunidades con un CV que{" "}
            <span className="text-accent">realmente funciona</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200 text-balance">
            Ya ayudé a +20,000 personas a mejorar sus oportunidades laborales. Muchas trabajan en empresas como Prosegur, Aerolíneas, Jumbo y más.
            <strong className="text-primary-foreground"> Ahora te toca a vos.</strong>
          </p>

          {/* Video */}
          <div className="relative max-w-5xl mx-auto mb-8 animate-fade-in-up delay-300">
            <div className="aspect-video rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ssjbB2RKXg0?modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
                title="Cómo funciona - Hernán Lamanna CV"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
              {/* Overlay to hide YouTube title and controls */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-32 h-full bg-transparent pointer-events-none z-10" />
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
