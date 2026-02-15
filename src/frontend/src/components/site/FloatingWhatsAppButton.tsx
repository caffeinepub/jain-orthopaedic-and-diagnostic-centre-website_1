import { SiWhatsapp } from 'react-icons/si';
import { CLINIC_INFO } from '../../content/clinic';
import { useLanguage } from '../../i18n/LanguageProvider';

export default function FloatingWhatsAppButton() {
  const { t } = useLanguage();
  
  const handleClick = () => {
    const message = encodeURIComponent(t('whatsapp.defaultMessage'));
    window.open(`https://wa.me/${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-accent text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_60px_-15px_rgba(126,211,33,0.5)] focus:outline-none focus:ring-4 focus:ring-accent/50 z-40 group"
      aria-label={t('cta.bookViaWhatsApp')}
    >
      <SiWhatsapp className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
    </button>
  );
}
