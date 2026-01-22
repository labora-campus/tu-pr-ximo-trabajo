import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  "IMG_3824.PNG"
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Casos de éxito reales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados comprobables. Deslizá para ver las conversaciones reales.
          </p>
        </div>

        <div className="max-w-xs md:max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {screenshots.map((src, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl border border-border shadow-md bg-card aspect-[9/16] relative group">
                      <img
                        src={`/${src}`}
                        alt={`Testimonio ${index + 1}`}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          Verificado
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-background border-primary/20 hover:bg-primary hover:text-white" />
          </Carousel>

          <div className="flex justify-center mt-8 md:hidden text-sm text-muted-foreground animate-pulse">
            ← Deslizá para ver más →
          </div>
        </div>
      </div>
    </section>
  );
};
