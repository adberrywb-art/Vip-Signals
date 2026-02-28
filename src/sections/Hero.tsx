import { ArrowRight, TrendingUp, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const features = [
    { icon: TrendingUp, label: 'Señales Precisas' },
    { icon: Shield, label: 'Pagos Seguros' },
    { icon: Zap, label: 'Acceso Inmediato' },
    { icon: Globe, label: 'Soporte Global' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Plataforma de Trading Profesional
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Domina el</span>
            <br />
            <span className="gradient-text">Mercado Financiero</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Accede a señales de trading profesionales, análisis técnico avanzado 
            y estrategias probadas para maximizar tus ganancias en los mercados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => onNavigate('payments')}
              className="btn-primary text-lg px-8 py-6"
            >
              Ver Planes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('networks')}
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            >
              Únete a la Comunidad
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Traders Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground mt-1">Tasa de Éxito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
