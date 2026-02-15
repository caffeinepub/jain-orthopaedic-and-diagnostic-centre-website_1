import { useLanguage } from '../i18n/LanguageProvider';
import { usePageMeta } from '../hooks/usePageMeta';
import { CLINIC_INFO } from '../content/clinic';
import { Clock, MapPin, Phone, Mail, Stethoscope, Bone, Activity, Heart } from 'lucide-react';
import Section from '../components/site/Section';
import { Card, CardContent } from '../components/site/ThemePrimitives';
import GoogleMapEmbed from '../components/site/GoogleMapEmbed';
import AppointmentWidget from '../components/site/AppointmentWidget';

export default function ServicesContactPage() {
  const { t } = useLanguage();
  
  usePageMeta(
    t('meta.services.title'),
    t('meta.services.description')
  );

  const services = [
    {
      icon: Stethoscope,
      title: t('services.orthopedicConsultation'),
      description: t('services.orthopedicConsultationDesc')
    },
    {
      icon: Bone,
      title: t('services.boneJointTreatment'),
      description: t('services.boneJointTreatmentDesc')
    },
    {
      icon: Activity,
      title: t('services.diagnostics'),
      description: t('services.diagnosticsDesc')
    },
    {
      icon: Heart,
      title: t('services.physiotherapy'),
      description: t('services.physiotherapyDesc')
    }
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-soft bg-pattern-dots pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-heading font-bold text-gray-900 leading-tight">
              {t('servicesPage.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('servicesPage.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('services.ourServices')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="service-detail-card border-2 border-transparent hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Appointment Section */}
      <Section className="bg-gradient-soft relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('appointment.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <AppointmentWidget />
          </div>
        </div>
      </Section>

      {/* Contact Information Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                        {t('contact.address')}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{CLINIC_INFO.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                        {t('contact.phone')}
                      </h3>
                      <a href={`tel:${CLINIC_INFO.phone}`} className="text-primary hover:underline text-lg font-medium">
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                        {t('contact.hours')}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{CLINIC_INFO.hours}</p>
                      <p className="text-gray-600 leading-relaxed">{CLINIC_INFO.closed}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                        {t('contact.languages')}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{t('contact.languagesSupported')}</p>
                      <p className="text-accent font-semibold mt-3 text-lg">{t('contact.lgbtqFriendly')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-fit sticky top-24">
              <GoogleMapEmbed />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gradient-soft relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('faq.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="faq-card border-l-4 border-l-transparent">
                <CardContent className="p-8">
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
