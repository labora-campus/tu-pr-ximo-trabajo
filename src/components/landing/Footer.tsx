import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">Hernán Lamanna</h3>
            <p className="text-background/60 text-sm">Armado de CV Profesional</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/hernilamanna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/XXXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-background/60 text-sm text-center md:text-right">
            © 2026 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
