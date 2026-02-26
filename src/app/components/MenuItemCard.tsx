import type { MenuItem } from "@/app/types/menu";

interface MenuItemProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start gap-3 mb-2">
        <h3 className="text-lg min-w-0 flex-1">{item.name}</h3>
        <span className="text-lg shrink-0 whitespace-nowrap">{item.price}</span>
      </div>
      <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
    </div>
  );
}
