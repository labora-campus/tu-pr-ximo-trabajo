import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";

const screenshots = [
  "IMG_3588.PNG",
  "IMG_3616.PNG",
  "IMG_3812.PNG",
  "IMG_3813.PNG",
  "IMG_3814.PNG",
  "IMG_3815.PNG",
  "IMG_3816.PNG",
  "IMG_3817.PNG",
  "IMG_3818.PNG",
  "IMG_3819.PNG",
  "IMG_3820.PNG",
  "IMG_3821.PNG",
  "IMG_3822.PNG",
  "IMG_3823.PNG",
  "IMG_3824.PNG",
  "WhatsApp Image 2026-01-24 at 17.04.44.jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.44 (1).jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.44 (2).jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.44 (3).jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.45.jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.45 (1).jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.45 (2).jpeg",
  "WhatsApp Image 2026-01-24 at 17.04.52.jpeg"
];

const INITIAL_DISPLAY = 9;

export const Testimonials = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const displayedScreenshots = showAll ? screenshots : screenshots.slice(0, INITIAL_DISPLAY);
  const remainingCount = screenshots.length - INITIAL_DISPLAY;

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados reales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados comprobables. Click en cualquier imagen para verla completa.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {displayedScreenshots.map((src, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="overflow-hidden rounded-xl border border-border shadow-md bg-card aspect-[9/16] relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={`/${src}`}
                    alt={`Testimonio ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Click para ampliar
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                  <img
                    src={`/${src}`}
                    alt={`Testimonio ${index + 1} - Vista completa`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Botón "Ver más" */}
        {!showAll && remainingCount > 0 && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="text-lg px-8 py-6 h-auto border-primary/30 hover:bg-primary/5"
            >
              Ver los {remainingCount} casos restantes
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Botón "Ver menos" */}
        {showAll && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => {
                setShowAll(false);
                // Scroll suave hacia el título de la sección
                document.querySelector('section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              variant="outline"
              className="text-lg px-8 py-6 h-auto border-primary/30 hover:bg-primary/5"
            >
              Ver menos
              <ChevronDown className="w-5 h-5 ml-2 rotate-180" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
