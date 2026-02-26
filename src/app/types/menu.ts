export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
