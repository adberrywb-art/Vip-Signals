import React, { useState } from 'react';
import { Copy, CheckCircle, Building2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { usePayment } from '@/context/PaymentContext';
import { paymentConfig } from '@/config/payment.config';

export const SpeiPayment: React.FC = () => {
  const { selectedProduct, processPayment, paymentStatus } = usePayment();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const spei = paymentConfig.spei;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePayment = async () => {
    await processPayment('spei');
  };

  if (!spei.enabled) {
    return null;
  }

  const bankDetails = [
    { label: 'Banco', value: spei.bankName, field: 'bank' },
    { label: 'Titular', value: spei.accountHolder, field: 'holder' },
    { label: 'Número de cuenta', value: spei.accountNumber, field: 'account' },
    { label: 'CLABE', value: spei.clabe, field: 'clabe' },
  ];

  return (
    <Card className="trading-card bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span>Transferencia SPEI</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Bank Details */}
        <div className="bg-background rounded-lg p-4 border border-border space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground mb-3">
            Datos bancarios
          </h4>
          {bankDetails.map((detail) => (
            <div key={detail.field} className="space-y-1">
              <Label className="text-xs text-muted-foreground">
                {detail.label}
              </Label>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-secondary px-3 py-2 rounded text-sm font-mono text-foreground">
                  {detail.value}
                </code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleCopy(detail.value, detail.field)}
                  className="shrink-0 h-8 w-8"
                >
                  {copiedField === detail.field ? (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Amount */}
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Monto a transferir:</span>
            <span className="text-2xl font-bold text-primary">
              ${selectedProduct?.price.toFixed(2)} <span className="text-sm">USD</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Equivalente en MXN según tipo de cambio del día
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Instrucciones:
          </h4>
          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Accede a tu banco por internet o app móvil</li>
            <li>Selecciona &quot;Transferencia SPEI&quot;</li>
            <li>Ingresa los datos bancarios mostrados arriba</li>
            <li>Ingresa el monto exacto: <strong className="text-primary">${selectedProduct?.price.toFixed(2)} USD</strong></li>
            <li>En concepto escribe tu nombre</li>
            <li>Confirma la transferencia</li>
            <li>Guarda el comprobante</li>
          </ol>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
          <p className="text-xs text-yellow-500">
            <strong>Importante:</strong> Las transferencias SPEI pueden tardar hasta 24 horas hábiles en reflejarse. 
            Una vez confirmado tu pago, recibirás acceso inmediato.
          </p>
        </div>

        {/* Confirm Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={paymentStatus.isProcessing || !selectedProduct}
          className="w-full btn-primary"
        >
          {paymentStatus.isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Verificando...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Ya realicé la transferencia
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SpeiPayment;
