// ============================================
// CONFIGURACIÓN DE PAGOS - ADBERRY TRADING PRO
// ============================================
// Edita este archivo con tus credenciales reales

import type { PaymentConfig, CompanyInfo, Product, SocialLink } from '@/types';

// Información de la empresa
export const companyInfo: CompanyInfo = {
  name: "Adberry Trading Pro",
  logo: "/assets/logo.png", // Coloca tu logo en public/assets/logo.png
  telegramLink: "https://t.me/tu_usuario", // Cambia por tu link de Telegram
  telegramBotToken: "", // Opcional: Token de bot para notificaciones automáticas
};

// Configuración de métodos de pago
// IMPORTANTE: En producción, usa variables de entorno para las claves secretas
export const paymentConfig: PaymentConfig = {
  // ============================================
  // STRIPE CONFIGURATION
  // ============================================
  stripe: {
    // Tu Publishable Key de Stripe (empieza con pk_live_ o pk_test_)
    publishableKey: "pk_live_TU_CLAVE_PUBLICA_AQUI",
    
    // Tu Secret Key de Stripe (empieza con sk_live_ o sk_test_)
    // ⚠️ NUNCA expongas esta clave en el frontend en producción
    secretKey: "sk_live_TU_CLAVE_SECRETA_AQUI",
    
    enabled: true, // Cambia a false para desactivar
  },

  // ============================================
  // BINANCE PAY CONFIGURATION
  // ============================================
  binance: {
    // Tu Merchant ID de Binance Pay
    merchantId: "TU_MERCHANT_ID_AQUI",
    
    // Tu API Key de Binance Pay
    apiKey: "TU_API_KEY_AQUI",
    
    enabled: true, // Cambia a false para desactivar
  },

  // ============================================
  // SPEI / TRANSFERENCIA BANCARIA (México)
  // ============================================
  spei: {
    // Nombre del banco
    bankName: "BBVA",
    
    // Número de cuenta
    accountNumber: "1234567890",
    
    // CLABE interbancaria (18 dígitos)
    clabe: "012180012345678901",
    
    // Nombre del titular de la cuenta
    accountHolder: "TU NOMBRE COMPLETO",
    
    enabled: true, // Cambia a false para desactivar
  },

  // ============================================
  // PAYPAL CONFIGURATION
  // ============================================
  paypal: {
    // Tu Client ID de PayPal
    clientId: "TU_CLIENT_ID_DE_PAYPAL",
    
    // Tu Secret de PayPal
    // ⚠️ NUNCA expongas esta clave en el frontend en producción
    secret: "TU_SECRET_DE_PAYPAL",
    
    enabled: true, // Cambia a false para desactivar
  },
};

// Productos disponibles
export const products: Product[] = [
  {
    id: "basic-plan",
    name: "Plan Básico",
    description: "Acceso a señales básicas de trading",
    price: 29.99,
    currency: "USD",
    features: [
      "Señales de trading diarias",
      "Análisis técnico básico",
      "Soporte por email",
      "Acceso al canal de Telegram",
    ],
  },
  {
    id: "pro-plan",
    name: "Plan Pro",
    description: "Acceso completo a todas las herramientas",
    price: 79.99,
    currency: "USD",
    features: [
      "Todas las señales en tiempo real",
      "Análisis técnico avanzado",
      "Estrategias exclusivas",
      "Soporte prioritario 24/7",
      "Acceso a webinars mensuales",
      "Bot de alertas automáticas",
    ],
  },
  {
    id: "vip-plan",
    name: "Plan VIP",
    description: "Experiencia premium personalizada",
    price: 199.99,
    currency: "USD",
    features: [
      "Todo del Plan Pro",
      "Mentorías personalizadas",
      "Acceso a operaciones en vivo",
      "Portfolio review mensual",
      "Estrategias institucionales",
      "Contacto directo con traders",
    ],
  },
];

// Redes sociales
export const socialLinks: SocialLink[] = [
  {
    id: "telegram",
    name: "Telegram",
    url: "https://t.me/tu_canal",
    icon: "MessageCircle",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/tu_usuario",
    icon: "Instagram",
  },
  {
    id: "twitter",
    name: "Twitter/X",
    url: "https://twitter.com/tu_usuario",
    icon: "Twitter",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/tu_canal",
    icon: "Youtube",
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.gg/tu_invitacion",
    icon: "MessageSquare",
  },
];

// ID de Binance para mostrar (código de pago)
export const binancePayId = "TU_BINANCE_PAY_ID";
