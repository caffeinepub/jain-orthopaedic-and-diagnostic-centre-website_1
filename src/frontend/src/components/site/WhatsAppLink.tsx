import { SiWhatsapp } from 'react-icons/si';
import { CLINIC_INFO } from '../../content/clinic';
import { useLanguage } from '../../i18n/LanguageProvider';
import { ReactNode } from 'react';

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  message?: string;
}

export default function WhatsAppLink({ children, className = '', message }: WhatsAppLinkProps) {
  const { t } = useLanguage();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = message || t('whatsapp.defaultMessage');
    const encodedMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-accent/50 ${className}`}
    >
      <SiWhatsapp className="w-5 h-5" />
      {children}
    </button>
  );
}
