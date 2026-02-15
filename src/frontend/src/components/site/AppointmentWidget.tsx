import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageProvider';
import { CLINIC_INFO } from '../../content/clinic';
import { Card, CardContent } from './ThemePrimitives';
import { SiWhatsapp } from 'react-icons/si';

export default function AppointmentWidget() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `${t('appointment.greeting')}

${t('appointment.name')}: ${name}
${t('appointment.phone')}: ${phone}
${t('appointment.concern')}: ${concern}

${t('appointment.requestMessage')}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setName('');
    setPhone('');
    setConcern('');
  };

  return (
    <Card className="shadow-2xl">
      <CardContent className="p-10">
        <h3 className="font-heading font-bold text-3xl text-gray-900 mb-8 text-center">
          {t('appointment.formTitle')}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('appointment.name')} *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
              placeholder={t('appointment.namePlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('appointment.phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input"
              placeholder={t('appointment.phonePlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="concern" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('appointment.concern')}
            </label>
            <textarea
              id="concern"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              rows={4}
              className="form-textarea"
              placeholder={t('appointment.concernPlaceholder')}
            />
          </div>

          <button
            type="submit"
            className="w-full btn-accent flex items-center justify-center gap-3 text-lg shadow-2xl"
          >
            <SiWhatsapp className="w-6 h-6" />
            {t('appointment.submit')}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
