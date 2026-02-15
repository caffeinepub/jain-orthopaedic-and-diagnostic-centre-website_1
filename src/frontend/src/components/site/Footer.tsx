import { useLanguage } from '../../i18n/LanguageProvider';
import { CLINIC_INFO } from '../../content/clinic';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import GetDirectionsLink from './GetDirectionsLink';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Clinic Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6 text-white">
              {CLINIC_INFO.name}
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="leading-relaxed">{CLINIC_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="footer-link">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p>{CLINIC_INFO.hours}</p>
                  <p>{CLINIC_INFO.closed}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="footer-link">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  {t('nav.services')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 text-white">
              {t('footer.quickActions')}
            </h3>
            <div className="space-y-4">
              <WhatsAppLink className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-accent/40">
                {t('cta.bookViaWhatsApp')}
              </WhatsAppLink>
              <GetDirectionsLink className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/40">
                {t('cta.getDirections')}
              </GetDirectionsLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} {CLINIC_INFO.name}. {t('footer.allRightsReserved')}
            </p>
            <p className="flex items-center gap-2">
              {t('footer.builtWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t('footer.using')}{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'clinic-app'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
