import React from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Twitter, 
  Youtube, 
  MessageSquare,
  ExternalLink,
  Users,
  Bell,
  Video,
  MessageSquareText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { socialLinks } from '@/config/payment.config';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Instagram,
  Twitter,
  Youtube,
  MessageSquare,
};

const socialStats: Record<string, { followers: string; description: string; icon: React.ElementType }> = {
  telegram: { 
    followers: '2.5K+', 
    description: 'Señales en tiempo real y alertas instantáneas',
    icon: Bell
  },
  instagram: { 
    followers: '5K+', 
    description: 'Contenido diario y análisis visuales',
    icon: Users
  },
  twitter: { 
    followers: '3K+', 
    description: 'Opiniones del mercado y noticias actualizadas',
    icon: MessageSquareText
  },
  youtube: { 
    followers: '1K+', 
    description: 'Tutoriales, análisis y estrategias en video',
    icon: Video
  },
  discord: { 
    followers: '800+', 
    description: 'Comunidad privada y mentorías grupales',
    icon: Users
  },
};

export const Networks: React.FC = () => {
  return (
    <section id="networks" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Únete a Nuestras <span className="gradient-text">Redes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conecta con miles de traders, recibe señales en tiempo real y accede 
            a contenido exclusivo en nuestras plataformas.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon] || MessageCircle;
            const stats = socialStats[social.id] || { followers: '0', description: '', icon: Users };
            const StatsIcon = stats.icon;

            // Color mapping for each platform
            const colorMap: Record<string, string> = {
              telegram: 'from-[#0088cc] to-[#00a8e6]',
              instagram: 'from-[#E4405F] via-[#F77737] to-[#FCAF45]',
              twitter: 'from-[#1DA1F2] to-[#0d8ecf]',
              youtube: 'from-[#FF0000] to-[#cc0000]',
              discord: 'from-[#5865F2] to-[#4752C4]',
            };

            const gradient = colorMap[social.id] || 'from-primary to-accent';

            return (
              <Card
                key={social.id}
                className="trading-card bg-card border-border overflow-hidden group"
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <StatsIcon className="w-4 h-4" />
                      <span>{stats.followers}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {stats.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full group/btn"
                    >
                      <span className="flex-1">Unirse Ahora</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10K+', label: 'Miembros Totales' },
            { value: '500+', label: 'Señales Mensuales' },
            { value: '50+', label: 'Países' },
            { value: '4.9', label: 'Rating Promedio' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/50"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
