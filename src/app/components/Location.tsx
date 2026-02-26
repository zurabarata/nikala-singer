import { RESTAURANT_INFO } from "@/app/constants";
import { Footer } from "@/app/components/Footer";

export function Location() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Location Title */}
      <h2 className="text-4xl sm:text-5xl text-center mb-8 sm:mb-12">Standort</h2>

      {/* Address */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-2xl sm:text-3xl mb-2">{RESTAURANT_INFO.address.street}</p>
        <p className="text-2xl sm:text-3xl mb-8">{RESTAURANT_INFO.address.city}</p>
      </div>

      {/* Map Container */}
      <div className="w-full h-[400px] sm:h-[500px] bg-muted rounded-lg mb-8 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9!2d9.7320!3d52.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzMzLjIiTiA5wrA0Myc1NS4yIkU!5e0!3m2!1sen!2sde!4v1234567890"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurantstandort"
        />
      </div>

      {/* Contact Information */}
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl mb-4">Kontakt</h3>
        <a href={`tel:${RESTAURANT_INFO.contact.phone}`} className="text-xl hover:underline block mb-2">
          {RESTAURANT_INFO.contact.phoneDisplay}
        </a>
      </div>

      {/* Opening Hours */}
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl mb-4">Öffnungszeiten</h3>
        <div className="space-y-2">
          <p>{RESTAURANT_INFO.hours.weekday}</p>
          <p>{RESTAURANT_INFO.hours.weekend}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
