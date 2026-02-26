import type { MenuItem } from "@/app/types/menu";

interface MenuItemProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemProps) {
  const displayName = item.name.replace(/(\d+,\d+)\s+l\b/g, "$1\u00A0l");

  return (
    <div className="mb-6">
      <div className="mb-2 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1">
        <h3 className="text-lg min-w-0 leading-tight [text-wrap:pretty]">{displayName}</h3>
        <span className="text-lg shrink-0 whitespace-nowrap text-right">{item.price}</span>
      </div>
      <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
    </div>
  );
}
