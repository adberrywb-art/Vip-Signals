import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePayment } from '@/context/PaymentContext';
import { paymentConfig } from '@/config/payment.config';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wallet } from 'lucide-react';

export const PayPalPayment: React.FC = () => {
  const { selectedProduct, processPayment, paymentStatus } = usePayment();

  const handlePayPalPayment = async () => {
    // Simulación de pago PayPal para demo
    await processPayment('paypal');
  };

  if (!paymentConfig.paypal.enabled) {
    return null;
  }

  return (
    <Card className="trading-card bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003087] to-[#009CDE] flex items-center justify-center">
            <span className="text-white font-bold text-lg">Pp</span>
          </div>
          <span>Pagar con PayPal</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* PayPal Info */}
        <div className="bg-[#003087]/10 rounded-lg p-4 border border-[#003087]/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#003087] font-bold">Pay<span className="text-[#009CDE">Pal</span></span>
            </div>
            <div>
              <p className="font-semibold">Pago seguro con PayPal</p>
              <p className="text-xs text-muted-foreground">Protección al comprador incluida</p>
            </div>
          </div>
        </div>

        {/* Amount */}
        <div className="flex justify-between items-center bg-background rounded-lg p-4 border border-border">
          <span className="text-sm text-muted-foreground">Total a pagar:</span>
          <span className="text-xl font-bold text-primary">
            ${selectedProduct?.price.toFixed(2)} <span className="text-sm">USD</span>
          </span>
        </div>

        {/* PayPal Buttons Container */}
        <div className="space-y-3">
          {/* Para demo: Botón simulado */}
          <Button
            onClick={handlePayPalPayment}
            disabled={paymentStatus.isProcessing || !selectedProduct}
            className="w-full bg-[#0070BA] hover:bg-[#003087] text-white font-semibold py-3"
          >
            {paymentStatus.isProcessing ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Procesando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Pagar con PayPal
              </span>
            )}
          </Button>

          {/* PayPal Real Integration (descomentar en producción) */}
          {/*
          <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: selectedProduct?.price.toFixed(2) || "0",
                        currency_code: "USD",
                      },
                      description: selectedProduct?.name || "",
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                await processPayment('paypal');
              }}
              onError={(err) => {
                console.error('PayPal error:', err);
              }}
            />
          </PayPalScriptProvider>
          */}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span>Pago inmediato</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span>Protección al comprador</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span>Sin compartir datos</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span>Reembolso disponible</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PayPalPayment;
