import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../../content/clinic';
import { ReactNode } from 'react';

interface CallLinkProps {
  children: ReactNode;
  className?: string;
}

export default function CallLink({ children, className = '' }: CallLinkProps) {
  return (
    <a
      href={`tel:${CLINIC_INFO.phone}`}
      className={`inline-flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/50 ${className}`}
    >
      <Phone className="w-5 h-5" />
      {children}
    </a>
  );
}
