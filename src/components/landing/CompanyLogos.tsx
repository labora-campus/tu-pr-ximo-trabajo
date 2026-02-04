import { ComponentProps } from "react";

// Helper to render consistent logo styles
const LogoContainer = ({ children, className, ...props }: ComponentProps<"div">) => (
    <div
        className={`h-16 px-6 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 ${className}`}
        {...props}
    >
        {children}
    </div>
);

const logos = [
    // MercadoLibre
    <svg viewBox="0 0 140 40" className="h-9">
        <circle cx="20" cy="20" r="15" fill="#FFE600" />
        <path d="M15,25 L20,15 L25,25" fill="none" stroke="#2D3277" strokeWidth="3" />
        <text x="42" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="#2D3277">MercadoLibre</text>
    </svg>,

    // Jumbo
    <svg viewBox="0 0 100 40" className="h-8">
        <circle cx="20" cy="20" r="15" fill="#009640" />
        <text x="40" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="#009640">Jumbo</text>
    </svg>,

    // Farmacity
    <svg viewBox="0 0 140 40" className="h-8">
        <rect x="0" y="5" width="30" height="30" rx="5" fill="#4CAF50" />
        <path d="M15,10 L15,30 M5,20 L25,20" stroke="white" strokeWidth="4" />
        <text x="40" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E3A5F">farmacity</text>
    </svg>,

    // Shell
    <svg viewBox="0 0 100 40" className="h-9">
        <path d="M10,30 L20,10 L30,5 L40,10 L50,30 Z" fill="#DD1D21" stroke="#FFD900" strokeWidth="2" />
        <text x="60" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#DD1D21">Shell</text>
    </svg>,

    // YPF
    <svg viewBox="0 0 100 40" className="h-10">
        <rect x="0" y="0" width="40" height="40" rx="5" fill="#0066CC" />
        <text x="10" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="white">YPF</text>
        <text x="45" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#0066CC">YPF</text>
    </svg>,

    // Coto
    <svg viewBox="0 0 100 40" className="h-8">
        <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#DA291C">COTO</text>
        <circle cx="90" cy="15" r="5" fill="#DA291C" />
    </svg>,

    // Disco
    <svg viewBox="0 0 100 40" className="h-8">
        <circle cx="15" cy="20" r="12" fill="#FF6B00" />
        <text x="32" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26" fill="#FF6B00">DISCO</text>
    </svg>,

    // Aerolíneas Argentinas
    <svg viewBox="0 0 200 40" className="h-9">
        <path d="M10,20 Q30,5 50,20 T90,20" fill="none" stroke="#00AEEF" strokeWidth="3" />
        <text x="0" y="35" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#00AEEF">Aerolíneas Argentinas</text>
    </svg>,

    // Chango Más
    <svg viewBox="0 0 140 40" className="h-9">
        <rect x="0" y="5" width="35" height="30" rx="4" fill="#E30613" />
        <path d="M10,15 L25,15 L20,25 L15,25 Z" fill="white" />
        <text x="42" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" fill="#E30613">Chango Más</text>
    </svg>,

    // DHL
    <svg viewBox="0 0 100 40" className="h-8">
        <rect x="0" y="8" width="90" height="24" fill="#FFCC00" />
        <text x="10" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#D40511">DHL</text>
    </svg>,

    // Andreani
    <svg viewBox="0 0 140 40" className="h-8">
        <rect x="0" y="5" width="30" height="30" rx="3" fill="#003DA5" />
        <text x="12" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="white">A</text>
        <text x="38" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#003DA5">ANDREANI</text>
    </svg>,

    // Prosegur
    <svg viewBox="0 0 140 40" className="h-8">
        <circle cx="15" cy="20" r="12" fill="#FDB913" />
        <text x="32" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#FDB913">PROSEGUR</text>
    </svg>,

    // Hospital Alemán
    <svg viewBox="0 0 180 40" className="h-9">
        <rect x="0" y="5" width="30" height="30" rx="15" fill="#004B87" />
        <path d="M15,10 L15,30 M5,20 L25,20" stroke="white" strokeWidth="3" />
        <text x="38" y="28" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="20" fill="#004B87">Hospital Alemán</text>
    </svg>,

    // Hospital Austral
    <svg viewBox="0 0 180 40" className="h-9">
        <rect x="0" y="5" width="30" height="30" rx="15" fill="#006837" />
        <path d="M15,10 L15,30 M5,20 L25,20" stroke="white" strokeWidth="3" />
        <text x="38" y="28" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="20" fill="#006837">Hospital Austral</text>
    </svg>,

    // Banco Provincia
    <svg viewBox="0 0 170 40" className="h-9">
        <rect x="0" y="5" width="30" height="30" rx="3" fill="#00529B" />
        <text x="10" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="white">BP</text>
        <text x="38" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="#00529B">Banco Provincia</text>
    </svg>,

    // Santander Río
    <svg viewBox="0 0 160 40" className="h-9">
        <circle cx="15" cy="20" r="12" fill="#EC0000" />
        <path d="M15,15 Q20,20 15,25 Q10,20 15,15" fill="white" />
        <text x="32" y="28" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#EC0000">Santander Río</text>
    </svg>,
];

export const CompanyLogos = () => {
    // Duplicate logos for seamless loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full py-4 overflow-hidden">
            <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

                {/* Scrolling container */}
                <div className="flex animate-scroll">
                    {duplicatedLogos.map((logo, index) => (
                        <LogoContainer key={index}>
                            {logo}
                        </LogoContainer>
                    ))}
                </div>
            </div>
        </div>
    );
};
