import { Instagram, MessageCircle, Linkedin, Music, Youtube } from "lucide-react";

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
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/gabriel-hernan-lamanna-b0178b192/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/hernilamanna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@hernilamanna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@hernanlamanna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5491150538808"
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
