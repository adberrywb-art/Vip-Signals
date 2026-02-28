import React from 'react';
import { TrendingUp, Heart, ExternalLink, FileText, Shield, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { companyInfo } from '@/config/payment.config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Legal',
      links: [
        { label: 'Términos y Condiciones', dialog: 'terms' },
        { label: 'Política de Privacidad', dialog: 'privacy' },
        { label: 'Aviso Legal', dialog: 'legal' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Contacto', href: companyInfo.telegramLink },
        { label: 'FAQ', href: '#' },
        { label: 'Ayuda', href: '#' },
      ],
    },
  ];

  const TermsContent = () => (
    <div className="space-y-4 text-sm text-muted-foreground max-h-[60vh] overflow-y-auto pr-4">
      <h3 className="text-lg font-semibold text-foreground">1. Aceptación de Términos</h3>
      <p>
        Al acceder y utilizar los servicios de {companyInfo.name}, usted acepta estar 
        legalmente obligado por estos términos y condiciones. Si no está de acuerdo con 
        alguna parte de estos términos, no debe utilizar nuestros servicios.
      </p>

      <h3 className="text-lg font-semibold text-foreground">2. Servicios de Trading</h3>
      <p>
        Nuestros servicios incluyen señales de trading, análisis técnico y educación 
        financiera. Todas las señales y análisis son proporcionados con fines informativos 
        y educativos únicamente.
      </p>

      <h3 className="text-lg font-semibold text-foreground">3. Riesgo de Inversión</h3>
      <p>
        El trading de criptomonedas, forex y otros instrumentos financieros conlleva un 
        alto nivel de riesgo y puede no ser adecuado para todos los inversores. El apalancamiento 
        adicional crea riesgos adicionales y pérdidas potenciales.
      </p>

      <h3 className="text-lg font-semibold text-foreground">4. Resultados Pasados</h3>
      <p>
        El rendimiento pasado no garantiza resultados futuros. Todas las señales y 
        recomendaciones son basadas en análisis técnico y no constituyen asesoramiento 
        financiero personalizado.
      </p>

      <h3 className="text-lg font-semibold text-foreground">5. Pagos y Reembolsos</h3>
      <p>
        Todos los pagos son procesados de forma segura a través de nuestros proveedores 
        de pago autorizados. Ofrecemos garantía de reembolso de 7 días para todos nuestros 
        planes, sujeto a nuestros términos de reembolso.
      </p>

      <h3 className="text-lg font-semibold text-foreground">6. Propiedad Intelectual</h3>
      <p>
        Todo el contenido, materiales y recursos proporcionados son propiedad exclusiva 
        de {companyInfo.name} y están protegidos por derechos de autor y otras leyes de 
        propiedad intelectual.
      </p>

      <h3 className="text-lg font-semibold text-foreground">7. Limitación de Responsabilidad</h3>
      <p>
        {companyInfo.name} no será responsable por pérdidas directas, indirectas, incidentales, 
        especiales o consecuentes resultantes del uso o la imposibilidad de usar nuestros servicios.
      </p>

      <h3 className="text-lg font-semibold text-foreground">8. Modificaciones</h3>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. 
        Los cambios entrarán en vigor inmediatamente después de su publicación.
      </p>

      <p className="text-xs text-muted-foreground pt-4 border-t border-border">
        Última actualización: {currentYear}
      </p>
    </div>
  );

  const PrivacyContent = () => (
    <div className="space-y-4 text-sm text-muted-foreground max-h-[60vh] overflow-y-auto pr-4">
      <h3 className="text-lg font-semibold text-foreground">1. Información que Recopilamos</h3>
      <p>
        Recopilamos información personal que usted nos proporciona directamente, incluyendo 
        nombre, dirección de correo electrónico, información de pago y datos de contacto.
      </p>

      <h3 className="text-lg font-semibold text-foreground">2. Uso de la Información</h3>
      <p>
        Utilizamos su información para proporcionar y mejorar nuestros servicios, procesar 
        pagos, enviar comunicaciones y cumplir con obligaciones legales.
      </p>

      <h3 className="text-lg font-semibold text-foreground">3. Protección de Datos</h3>
      <p>
        Implementamos medidas de seguridad técnicas y organizativas para proteger su 
        información personal contra acceso no autorizado, alteración o destrucción.
      </p>

      <h3 className="text-lg font-semibold text-foreground">4. Compartir Información</h3>
      <p>
        No vendemos ni alquilamos su información personal a terceros. Solo compartimos 
        información con proveedores de servicios necesarios para operar nuestro negocio.
      </p>

      <h3 className="text-lg font-semibold text-foreground">5. Cookies</h3>
      <p>
        Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede 
        configurar su navegador para rechazar cookies, pero esto puede afectar la 
        funcionalidad del sitio.
      </p>

      <p className="text-xs text-muted-foreground pt-4 border-t border-border">
        Última actualización: {currentYear}
      </p>
    </div>
  );

  const LegalContent = () => (
    <div className="space-y-4 text-sm text-muted-foreground max-h-[60vh] overflow-y-auto pr-4">
      <h3 className="text-lg font-semibold text-foreground">Aviso Legal</h3>
      <p>
        {companyInfo.name} es un proveedor de educación y análisis de trading. No somos 
        asesores financieros registrados y no proporcionamos asesoramiento de inversión 
        personalizado.
      </p>

      <h3 className="text-lg font-semibold text-foreground">Descargo de Responsabilidad</h3>
      <p>
        Las opiniones, noticias, investigaciones, análisis, precios y otra información 
        contenida en este sitio web se proporcionan como comentarios generales del mercado 
        y no constituyen asesoramiento de inversión.
      </p>

      <h3 className="text-lg font-semibold text-foreground">Riesgos del Trading</h3>
      <p>
        El trading conlleva riesgos significativos, incluyendo la posible pérdida total 
        de capital. No invierta dinero que no pueda permitirse perder.
      </p>

      <p className="text-xs text-muted-foreground pt-4 border-t border-border">
        © {currentYear} {companyInfo.name}. Todos los derechos reservados.
      </p>
    </div>
  );

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{companyInfo.name}</h3>
                <p className="text-xs text-muted-foreground">Trading Profesional</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Plataforma líder en señales de trading y análisis técnico. 
              Ayudamos a traders de todos los niveles a alcanzar sus objetivos financieros.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>soporte@{companyInfo.name.toLowerCase().replace(/\s+/g, '')}.com</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {'dialog' in link ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {link.label}
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <Shield className="w-5 h-5 text-primary" />
                              {link.label}
                            </DialogTitle>
                          </DialogHeader>
                          {link.dialog === 'terms' && <TermsContent />}
                          {link.dialog === 'privacy' && <PrivacyContent />}
                          {link.dialog === 'legal' && <LegalContent />}
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {companyInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Create by <span className="text-primary font-semibold">Adberry</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
