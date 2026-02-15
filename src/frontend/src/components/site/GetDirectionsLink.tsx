import { MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../../content/clinic';
import { ReactNode } from 'react';

interface GetDirectionsLinkProps {
  children: ReactNode;
  className?: string;
}

export default function GetDirectionsLink({ children, className = '' }: GetDirectionsLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address)}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/50 ${className}`}
    >
      <MapPin className="w-5 h-5" />
      {children}
    </button>
  );
}
