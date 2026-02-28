// Payment Types
export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  enabled: boolean;
}

export interface PaymentConfig {
  stripe: {
    publishableKey: string;
    secretKey: string;
    enabled: boolean;
  };
  binance: {
    merchantId: string;
    apiKey: string;
    enabled: boolean;
  };
  spei: {
    bankName: string;
    accountNumber: string;
    clabe: string;
    accountHolder: string;
    enabled: boolean;
  };
  paypal: {
    clientId: string;
    secret: string;
    enabled: boolean;
  };
}

export interface PaymentStatus {
  isProcessing: boolean;
  isSuccess: boolean;
  error: string | null;
  transactionId: string | null;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  telegramLink: string;
  telegramBotToken: string;
}
