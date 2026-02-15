import { CLINIC_INFO } from '../../content/clinic';

export default function GoogleMapEmbed() {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(CLINIC_INFO.address)}`;

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Clinic Location"
      />
    </div>
  );
}
