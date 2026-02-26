import type { MenuSection as MenuSectionType } from "@/app/types/menu";
import { MenuItemCard } from "@/app/components/MenuItemCard";

interface MenuSectionProps {
  section: MenuSectionType;
}

export function MenuSection({ section }: MenuSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-4xl sm:text-5xl text-center mb-12 sm:mb-16">
        {section.title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12">
        {section.items.map((item) => (
          <MenuItemCard key={`${item.name}-${item.price}`} item={item} />
        ))}
      </div>
    </section>
  );
}
