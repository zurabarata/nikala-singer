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
  "https://images.squarespace-cdn.com/content/v1/68bc52ec892dac7940e5051a/7da83241-7275-4547-8125-11ac8b7ea180/Nikala+SINGER+hannover+restaurant.png?format=1500w";
