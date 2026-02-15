import { useLanguage } from '../i18n/LanguageProvider';
import { usePageMeta } from '../hooks/usePageMeta';
import { CLINIC_INFO } from '../content/clinic';
import { Star, Stethoscope, Bone, Activity, Heart } from 'lucide-react';
import WhatsAppLink from '../components/site/WhatsAppLink';
import CallLink from '../components/site/CallLink';
import GoogleMapEmbed from '../components/site/GoogleMapEmbed';
import Section from '../components/site/Section';
import { Card, CardContent } from '../components/site/ThemePrimitives';

export default function HomePage() {
  const { t } = useLanguage();
  
  usePageMeta(
    t('meta.home.title'),
    t('meta.home.description')
  );

  const services = [
    { icon: Stethoscope, key: 'orthopedicConsultation' },
    { icon: Bone, key: 'boneJointTreatment' },
    { icon: Activity, key: 'diagnostics' },
    { icon: Heart, key: 'physiotherapy' }
  ];

  const testimonials = [
    { text: t('testimonials.1'), author: t('testimonials.author1') },
    { text: t('testimonials.2'), author: t('testimonials.author2') },
    { text: t('testimonials.3'), author: t('testimonials.author3') }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-soft bg-pattern-dots pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-gray-600">
                {t('hero.doctors')}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <WhatsAppLink className="btn-primary">
                  {t('cta.bookAppointment')}
                </WhatsAppLink>
                <CallLink className="btn-secondary">
                  {t('cta.callNow')}
                </CallLink>
              </div>
            </div>
            <div className="relative image-hover-zoom rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/image.png" 
                alt="Dr. S.K. Jain at clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof Section */}
      <Section className="py-0">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 -mt-16 relative z-10 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                  <span className="text-5xl font-heading font-bold text-gray-900">
                    {CLINIC_INFO.rating}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">{CLINIC_INFO.reviewCount} {t('rating.reviews')}</p>
              </div>
              <div className="text-center md:col-span-2 md:border-l md:border-gray-200 md:pl-8">
                <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                  "{testimonials[0].text}"
                </p>
                <p className="text-sm text-gray-500 mt-3 font-semibold">— {testimonials[0].author}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="service-card group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900">
                      {t(`services.${service.key}`)}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gradient-soft relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="testimonial-card group">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <p className="text-sm text-gray-500 font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-gray-900 mb-4">
              {t('location.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <GoogleMapEmbed />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-6 text-lg">{CLINIC_INFO.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                {t('cta.getDirections')}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-bold mb-6">
            {t('cta.readyToBook')}
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            {t('cta.contactUs')}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <WhatsAppLink className="btn-accent shadow-2xl">
              {t('cta.bookViaWhatsApp')}
            </WhatsAppLink>
            <CallLink className="bg-white text-primary hover:bg-gray-50 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/40">
              {t('cta.callNow')}
            </CallLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
