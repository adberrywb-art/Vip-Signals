import React, { useState } from 'react';
import { Copy, CheckCircle, Wallet, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePayment } from '@/context/PaymentContext';
import { paymentConfig, binancePayId } from '@/config/payment.config';

export const BinancePayment: React.FC = () => {
  const { selectedProduct, processPayment, paymentStatus } = usePayment();
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(binancePayId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = async () => {
    await processPayment('binance');
  };

  if (!paymentConfig.binance.enabled) {
    return null;
  }

  return (
    <Card className="trading-card bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F0B90B] to-[#F8D33A] flex items-center justify-center">
            <Wallet className="w-5 h-5 text-[#1E2026]" />
          </div>
          <span>Pagar con Binance Pay</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Binance Pay ID */}
        <div className="bg-background rounded-lg p-4 border border-border">
          <Label className="text-sm text-muted-foreground mb-2 block">
            ID de Binance Pay
          </Label>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-secondary px-3 py-2 rounded text-sm font-mono text-primary">
              {binancePayId}
            </code>
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyId}
              className="shrink-0"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* QR Code Toggle */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setShowQr(!showQr)}
        >
          <QrCode className="w-4 h-4 mr-2" />
          {showQr ? 'Ocultar QR' : 'Mostrar código QR'}
        </Button>

        {/* QR Code Display */}
        {showQr && (
          <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
              {/* Aquí iría el QR real generado con la API de Binance */}
              <div className="text-center">
                <QrCode className="w-24 h-24 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">QR de ejemplo</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Escanea con la app de Binance
            </p>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
          <h4 className="font-semibold text-sm">Instrucciones:</h4>
          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Abre la app de Binance</li>
            <li>Ve a &quot;Pay&quot; o &quot;Pagos&quot;</li>
            <li>Selecciona &quot;Enviar&quot;</li>
            <li>Ingresa el ID: <strong className="text-primary">{binancePayId}</strong></li>
            <li>Ingresa el monto: <strong className="text-primary">${selectedProduct?.price.toFixed(2)} USD</strong></li>
            <li>Confirma el pago</li>
          </ol>
        </div>

        {/* Confirm Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={paymentStatus.isProcessing || !selectedProduct}
          className="w-full btn-primary bg-[#F0B90B] hover:bg-[#F8D33A] text-[#1E2026]"
        >
          {paymentStatus.isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#1E2026] border-t-transparent rounded-full animate-spin" />
              Verificando...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Ya realicé el pago
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

// Import Label for the component
import { Label } from '@/components/ui/label';

export default BinancePayment;
