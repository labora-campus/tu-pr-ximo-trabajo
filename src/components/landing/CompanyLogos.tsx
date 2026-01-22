import { ComponentProps } from "react";

// Helper to render consistent logo styles
const LogoContainer = ({ children, className, ...props }: ComponentProps<"div">) => (
    <div
        className={`h-12 px-4 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const CompanyLogos = () => {
    return (
        <div className="w-full py-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {/* Prosegur Style */}
                <LogoContainer>
                    <svg viewBox="0 0 120 40" className="h-8 fill-current text-[#FFD700]">
                        <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="#FDB913">PROSEGUR</text>
                    </svg>
                </LogoContainer>

                {/* Aerolíneas Link Style */}
                <LogoContainer>
                    <svg viewBox="0 0 180 40" className="h-10">
                        <path d="M10,20 Q30,5 50,20 T90,20" fill="none" stroke="#00AEEF" strokeWidth="3" />
                        <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="#00AEEF">Aerolíneas Argentinas</text>
                    </svg>
                </LogoContainer>

                {/* Jumbo Style */}
                <LogoContainer>
                    <svg viewBox="0 0 100 40" className="h-8">
                        <circle cx="20" cy="20" r="15" fill="#009640" />
                        <text x="40" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="#009640">Jumbo</text>
                    </svg>
                </LogoContainer>

                {/* Farmacity Style */}
                <LogoContainer>
                    <svg viewBox="0 0 140 40" className="h-8">
                        <rect x="0" y="5" width="30" height="30" rx="5" fill="#4CAF50" />
                        <path d="M15,10 L15,30 M5,20 L25,20" stroke="white" strokeWidth="4" />
                        <text x="40" y="30" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#1E3A5F">farmacity</text>
                    </svg>
                </LogoContainer>

                {/* Shell Style */}
                <LogoContainer>
                    <svg viewBox="0 0 100 40" className="h-9">
                        <path d="M10,30 L20,10 L30,5 L40,10 L50,30 Z" fill="#DD1D21" stroke="#FFD900" strokeWidth="2" />
                        <text x="60" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#DD1D21">Shell</text>
                    </svg>
                </LogoContainer>

                {/* Coto Style */}
                <LogoContainer>
                    <svg viewBox="0 0 100 40" className="h-8">
                        <text x="0" y="30" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#DA291C">COTO</text>
                        <circle cx="90" cy="15" r="5" fill="#DA291C" />
                    </svg>
                </LogoContainer>
            </div>
        </div>
    );
};
