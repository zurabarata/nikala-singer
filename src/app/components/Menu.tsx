import { menuSections } from "@/app/data/menu";
import { MenuSection } from "@/app/components/MenuSection";
import { Footer } from "@/app/components/Footer";

export function Menu() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {menuSections.map((section) => (
        <MenuSection key={section.title} section={section} />
      ))}

      <Footer />
    </div>
  );
}
