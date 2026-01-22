import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    company: "PROSEGUR",
    result: "Consiguió trabajo gracias al CV",
    color: "bg-red-500"
  },
  {
    company: "Aeropuertos Argentina 2000",
    result: "Operador maquinista - Se postuló por LinkedIn",
    color: "bg-blue-600"
  },
  {
    company: "Farmacity + Jumbo",
    result: "DOBLETE - Consiguió 2 trabajos con el mismo CV",
    color: "bg-green-500"
  },
  {
    company: "Grupo Gestión",
    result: "9 días después consiguió trabajo",
    color: "bg-purple-600"
  },
  {
    company: "Aerolíneas Argentinas",
    result: "Sector Rampa - Consiguió horario fijo",
    color: "bg-sky-600"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Casos de éxito reales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mirá lo que lograron personas como vos con nuestros CVs
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="card-elevated p-6 h-full">
      <div className="flex items-start gap-4">
        {/* Company logo placeholder */}
        <div className={`w-14 h-14 ${testimonial.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-lg">
            {testimonial.company.charAt(0)}
          </span>
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-1">{testimonial.company}</h4>
          <div className="flex items-start gap-2">
            <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm">{testimonial.result}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
