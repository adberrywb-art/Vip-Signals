import React, { createContext, useContext, useState, useCallback } from 'react';
import type { PaymentStatus, Product } from '@/types';

interface PaymentContextType {
  paymentStatus: PaymentStatus;
  selectedProduct: Product | null;
  showEmojiEffect: boolean;
  showTelegramSection: boolean;
  receiptData: {
    transactionId: string;
    amount: number;
    productName: string;
    date: string;
  } | null;
  setSelectedProduct: (product: Product | null) => void;
  processPayment: (method: string) => Promise<void>;
  resetPayment: () => void;
  triggerEmojiEffect: () => void;
  downloadReceipt: () => void;
}

const defaultPaymentStatus: PaymentStatus = {
  isProcessing: false,
  isSuccess: false,
  error: null,
  transactionId: null,
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(defaultPaymentStatus);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showEmojiEffect, setShowEmojiEffect] = useState(false);
  const [showTelegramSection, setShowTelegramSection] = useState(false);
  const [receiptData, setReceiptData] = useState<PaymentContextType['receiptData']>(null);

  const triggerEmojiEffect = useCallback(() => {
    setShowEmojiEffect(true);
    setTimeout(() => setShowEmojiEffect(false), 2000);
  }, []);

  const processPayment = useCallback(async (_method: string) => {
    if (!selectedProduct) return;

    setPaymentStatus({
      ...defaultPaymentStatus,
      isProcessing: true,
    });

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    setPaymentStatus({
      isProcessing: false,
      isSuccess: true,
      error: null,
      transactionId,
    });

    setReceiptData({
      transactionId,
      amount: selectedProduct.price,
      productName: selectedProduct.name,
      date: new Date().toISOString(),
    });

    triggerEmojiEffect();
    setShowTelegramSection(true);
  }, [selectedProduct, triggerEmojiEffect]);

  const resetPayment = useCallback(() => {
    setPaymentStatus(defaultPaymentStatus);
    setSelectedProduct(null);
    setShowTelegramSection(false);
    setReceiptData(null);
  }, []);

  const downloadReceipt = useCallback(() => {
    if (!receiptData) return;

    const receiptContent = `
================================
    COMPROBANTE DE PAGO
================================

Transacción ID: ${receiptData.transactionId}
Fecha: ${new Date(receiptData.date).toLocaleString('es-MX')}

PRODUCTO:
${receiptData.productName}

TOTAL PAGADO:
$${receiptData.amount.toFixed(2)} USD

================================
Gracias por tu compra!
Adberry Trading Pro
================================
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `comprobante-${receiptData.transactionId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [receiptData]);

  return (
    <PaymentContext.Provider
      value={{
        paymentStatus,
        selectedProduct,
        showEmojiEffect,
        showTelegramSection,
        receiptData,
        setSelectedProduct,
        processPayment,
        resetPayment,
        triggerEmojiEffect,
        downloadReceipt,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
