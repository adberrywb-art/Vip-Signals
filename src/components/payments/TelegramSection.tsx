import { MessageCircle, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { usePayment } from '@/context/PaymentContext';
import { companyInfo } from '@/config/payment.config';

export const TelegramSection: React.FC = () => {
  const { showTelegramSection, receiptData, downloadReceipt, resetPayment } = usePayment();

  if (!showTelegramSection || !receiptData) return null;

  return (
    <div className="animate-slide-up">
      <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10">
        <CardContent className="p-6 space-y-6">
          {/* Success Header */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              ¡Pago Exitoso!
            </h3>
            <p className="text-muted-foreground">
              Tu transacción ha sido procesada correctamente
            </p>
          </div>

          {/* Transaction Details */}
          <div className="bg-background/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ID de Transacción:</span>
              <span className="font-mono text-foreground">{receiptData.transactionId}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Producto:</span>
              <span className="text-foreground">{receiptData.productName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Monto:</span>
              <span className="text-primary font-semibold">
                ${receiptData.amount.toFixed(2)} USD
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fecha:</span>
              <span className="text-foreground">
                {new Date(receiptData.date).toLocaleString('es-MX')}
              </span>
            </div>
          </div>

          {/* Download Receipt */}
          <Button
            onClick={downloadReceipt}
            variant="outline"
            className="w-full"
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar comprobante
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Siguiente paso
              </span>
            </div>
          </div>

          {/* Telegram CTA */}
          <div className="bg-[#0088cc]/10 rounded-lg p-4 border border-[#0088cc]/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#0088cc] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Envía tu comprobante</h4>
                <p className="text-xs text-muted-foreground">
                  Contáctanos por Telegram para activar tu acceso
                </p>
              </div>
            </div>

            <ol className="text-sm text-muted-foreground space-y-2 mb-4 list-decimal list-inside">
              <li>Descarga tu comprobante arriba</li>
              <li>Haz clic en el botón de Telegram</li>
              <li>Envía tu comprobante de pago</li>
              <li>Recibe acceso inmediato</li>
            </ol>

            <a
              href={companyInfo.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-[#0088cc] hover:bg-[#0077b3] text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactar por Telegram
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Make Another Purchase */}
          <Button
            onClick={resetPayment}
            variant="ghost"
            className="w-full text-muted-foreground"
          >
            Realizar otra compra
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TelegramSection;
