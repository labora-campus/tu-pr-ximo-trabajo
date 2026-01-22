import { FileText, Users, Clock, Tv } from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: "+5,000",
    label: "CVs armados"
  },
  {
    icon: Users,
    value: "314K",
    label: "seguidores"
  },
  {
    icon: Clock,
    value: "-24hs",
    label: "de entrega"
  },
  {
    icon: Tv,
    value: "CARAS TV",
    label: "Visto en"
  }
];

export const SocialProofBar = () => {
  return (
    <section className="bg-secondary py-8 border-y border-border">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-3 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
