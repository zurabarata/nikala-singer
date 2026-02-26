export const RESTAURANT_INFO = {
  name: "Nikala SINGER",
  address: {
    street: "Lärchenstraße 2",
    city: "30161 Hannover",
  },
  contact: {
    phone: "+4951133730282",
    phoneDisplay: "+ 49 511 33730282",
    instagram: "https://www.instagram.com/nikala_singer_restaurant_bar/",
  },
  hours: {
    weekday: "Montag - Freitag: 17:00 - 23:00",
    weekend: "Samstag - Sonntag: 12:00 - 23:00",
  },
} as const;

export const NAVIGATION = {
  home: { path: "/", label: "Hauptseite" },
  location: { path: "/standort", label: "Standort" },
  menu: { path: "/menu", label: "Menü" },
} as const;

export const HERO_IMAGE_URL =
  "/images/hero-singer.webp";
