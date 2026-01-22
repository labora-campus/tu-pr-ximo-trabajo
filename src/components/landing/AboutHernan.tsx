import { Button } from "@/components/ui/button";

export const AboutHernan = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent rounded-[2rem] transform rotate-3 translate-x-2 translate-y-2 opacity-30" />
                            <div className="absolute inset-0 bg-primary rounded-[2rem] transform -rotate-3 -translate-x-2 -translate-y-2 opacity-10" />
                            <img
                                src="/hernan-lamanna-perfil.jpg"
                                alt="Hernán Lamanna"
                                className="relative rounded-[2rem] w-full max-w-md mx-auto shadow-2xl z-10 object-cover aspect-[4/5]"
                            />

                            {/* Badge */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-background p-4 rounded-xl shadow-xl border border-border animate-float hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">+5,000</p>
                                        <p className="text-xs text-muted-foreground">Personas ayudadas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-left">
                        <div className="inline-block bg-accent/10 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            SOBRE MÍ
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Hola, soy <span className="text-primary tracking-tight">Hernán Lamanna</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Creador de <strong className="text-foreground">AyudarteAR</strong>. Este proyecto nació de una necesidad real: miles de personas buscaban trabajo, pero no sabían por dónde empezar, cómo armar un CV, dónde postularse, o cómo presentarse en una entrevista.
                                <span className="italic"> Y yo estuve en ese lugar.</span>
                            </p>

                            <p>
                                Con el tiempo descubrí que compartir mis aprendizajes, mis errores y mi experiencia podía ayudar a otros a conseguir oportunidades reales. Así empezó AyudarteAR: como un puente entre las personas y el trabajo que están buscando.
                            </p>

                            <p>
                                Hoy, mi comunidad reúne a miles de personas interesadas en búsqueda laboral, empleo remoto y desarrollo profesional, donde comparto contenido claro, educativo y práctico, pensado para generar impacto real.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-border flex items-center gap-8">
                            <div>
                                <span className="block text-3xl font-bold text-foreground">314K+</span>
                                <span className="text-sm text-muted-foreground">Seguidores</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-foreground">Top 1%</span>
                                <span className="text-sm text-muted-foreground">Creador de Contenido</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
