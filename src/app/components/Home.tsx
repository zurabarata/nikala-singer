import { RESTAURANT_INFO, HERO_IMAGE_URL } from "../constants";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
          {RESTAURANT_INFO.address.street}
        </h2>
        <p className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12">
          {RESTAURANT_INFO.address.city}
        </p>

        {/* Hero Image */}
        <div className="max-w-md mx-auto mb-8 sm:mb-12">
          <img
            src={HERO_IMAGE_URL}
            alt="Singer sewing machine with wine bottle and dumplings"
            className="w-full h-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
