import { Check, CreditCard, Wallet, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePayment } from '@/context/PaymentContext';
import { products } from '@/config/payment.config';
import { 
  StripePayment, 
  BinancePayment, 
  SpeiPayment, 
  PayPalPayment 
} from '@/components/payments';
import { TelegramSection } from '@/components/payments/TelegramSection';

export const Payments: React.FC = () => {
  const { selectedProduct, setSelectedProduct, showTelegramSection } = usePayment();

  return (
    <section id="payments" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Planes y Precios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Elige tu <span className="gradient-text">Plan Ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accede a herramientas profesionales de trading. Todos los planes incluyen 
            garantía de satisfacción de 7 días.
          </p>
        </div>

        {/* Products Grid */}
        {!showTelegramSection && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => {
              const isPopular = index === 1;
              const isSelected = selectedProduct?.id === product.id;

              return (
                <Card
                  key={product.id}
                  className={`trading-card relative overflow-hidden cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'border-primary ring-2 ring-primary/30'
                      : 'border-border'
                  } ${isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground text-center py-1 text-sm font-semibold">
                      MÁS POPULAR
                    </div>
                  )}

                  <CardContent className={`p-6 ${isPopular ? 'pt-10' : ''}`}>
                    {/* Product Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-primary">
                          ${product.price}
                        </span>
                        <span className="text-muted-foreground">USD</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Select Button */}
                    <Button
                      className={`w-full ${
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                      onClick={() => setSelectedProduct(product)}
                    >
                      {isSelected ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          Seleccionado
                        </span>
                      ) : (
                        'Seleccionar Plan'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Payment Methods */}
        {selectedProduct && !showTelegramSection && (
          <div className="animate-slide-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Método de Pago
              </h3>
              <p className="text-muted-foreground">
                Selecciona cómo deseas pagar por <span className="text-primary font-semibold">{selectedProduct.name}</span>
              </p>
            </div>

            <Tabs defaultValue="stripe" className="w-full max-w-2xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="stripe" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span className="hidden sm:inline">Tarjeta</span>
                </TabsTrigger>
                <TabsTrigger value="binance" className="flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  <span className="hidden sm:inline">Binance</span>
                </TabsTrigger>
                <TabsTrigger value="spei" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">SPEI</span>
                </TabsTrigger>
                <TabsTrigger value="paypal" className="flex items-center gap-2">
                  <span className="font-bold text-xs">Pp</span>
                  <span className="hidden sm:inline">PayPal</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="stripe">
                <StripePayment />
              </TabsContent>

              <TabsContent value="binance">
                <BinancePayment />
              </TabsContent>

              <TabsContent value="spei">
                <SpeiPayment />
              </TabsContent>

              <TabsContent value="paypal">
                <PayPalPayment />
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Telegram Section (Post-Payment) */}
        {showTelegramSection && (
          <div className="max-w-xl mx-auto">
            <TelegramSection />
          </div>
        )}

        {/* Security Badges */}
        {!showTelegramSection && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <span className="text-sm">Pagos Seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <span className="text-sm">SSL Encriptado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <span className="text-sm">Garantía 7 Días</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Payments;
