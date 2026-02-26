import type { MenuSection } from "@/app/types/menu";

export const appetizers: MenuSection = {
  title: "Vorspeisen",
  items: [
    {
      name: "Pchali Mix",
      price: "14,50 €",
      description:
        "Verschiedene Gemüse-Walnuss-Pasten aus Spinat, Roter Bete und Bohnen – würzig, nussig und typisch georgisch.",
    },
    {
      name: "Nigvsiani Badridshani",
      price: "13,50 €",
      description:
        "Auberginenröllchen, gefüllt mit aromatischer Walnuss-Knoblauch-Paste, garniert mit Granatapfelkernen.",
    },
    {
      name: "Tomaten Gurken Salat",
      price: "9,50 €",
      description: "Frischer Tomaten-Gurken-Salat mit Kräutern, leicht und erfrischend.",
    },
    {
      name: "Bunter Salat mit zarter Rinderzunge",
      price: "16,50 €",
      description:
        "Gemischter Salat mit knackigem Gemüse und feinen Scheiben gekochter Rinderzunge.",
    },
    {
      name: "Symphonie Georgienne Vegetarisch/Vegan",
      price: "16,50 €",
      description:
        "Eine bunte Platte georgischer Vorspeisen, ideal zum Teilen und Probieren.",
    },
  ],
};

export const soups: MenuSection = {
  title: "Suppen",
  items: [
    {
      name: "Chikhirtma",
      price: "8,50 €",
      description:
        "Cremige georgische Hühnersuppe mit Ei und Zitrone – leicht säuerlich und aromatisch.",
    },
    {
      name: "Kharcho",
      price: "9,50 €",
      description:
        "Würzige georgische Rindfleischsuppe mit Reis, Walnüssen und frischen Kräutern – herzhaft und intensiv.",
    },
  ],
};

export const mainDishes: MenuSection = {
  title: "Hauptgerichte",
  items: [
    {
      name: "Khinkali (5 Stück)",
      price: "12,50 €",
      description:
        "Große georgische Teigtaschen, gefüllt mit würzigem Fleisch und Brühe – ein echter Klassiker.",
    },
    {
      name: "Khinkali mit Käse (5 Stück)",
      price: "12,50 €",
      description: "Khinkali gefüllt mit cremigem Käse – saftig und würzig.",
    },
    {
      name: "Khachapuri Imeretian",
      price: "11,50 €",
      description:
        "Rundes georgisches Käsebrot mit geschmolzenem Imeretian-Käse – herzhaft und käsig.",
    },
    {
      name: "Khachapuri Adjaruli",
      price: "14,50 €",
      description: "Bootförmiges Käsebrot mit Butter und Ei – ein georgischer Star.",
    },
    {
      name: "Ojakhuri mit Schweinefleisch",
      price: "15,50 €",
      description:
        "Gebratenes Schweinefleisch mit Kartoffeln, Zwiebeln und georgischen Gewürzen – rustikal und lecker.",
    },
    {
      name: "Ojakhuri mit Rindfleisch",
      price: "16,50 €",
      description:
        "Gebratenes Rindfleisch mit Kartoffeln, Zwiebeln und georgischen Gewürzen – herzhaft und würzig.",
    },
    {
      name: "Chashushuli",
      price: "17,50 €",
      description:
        "Würziger Eintopf aus zartem Rind- oder Kalbfleisch mit Tomaten, Paprika und Kräutern – traditionell und aromatisch.",
    },
    {
      name: "Chakhokhbili",
      price: "16,50 €",
      description:
        "Georgisches Hühnerragout mit Tomaten, Zwiebeln und frischen Kräutern – saftig und geschmackvoll.",
    },
  ],
};

export const desserts: MenuSection = {
  title: "Nachspeisen",
  items: [
    {
      name: "Churchkhela",
      price: "6,50 €",
      description:
        "Traditionelle georgische Süßigkeit aus Walnüssen, umhüllt von konzentriertem Traubensaft – natürlich süß und energiereich.",
    },
    {
      name: "Baklava",
      price: "7,50 €",
      description:
        "Knuspriges Blätterteiggebäck mit Nüssen und Honig – süß und aromatisch.",
    },
  ],
};

export const redWinesByGlass: MenuSection = {
  title: "Rotweine",
  items: [
    {
      name: "Primitivo – 0,2 l",
      price: "7,20 € / Flasche 24,50 €",
      description:
        "Samtig und vollmundig mit Noten von dunklen Beeren und feiner Würze.",
    },
    {
      name: "Rioja – Spanien – 0,2 l",
      price: "7,10 € / Flasche 23,50 €",
      description:
        "Elegant mit fruchtigen Aromen, Vanille und leichter Holznote.",
    },
    {
      name: "Frankreich – 0,2 l",
      price: "7,80 € / Flasche 26,50 €",
      description:
        "Ausgewogen, fruchtbetont und kräftig mit sanften Tanninen.",
    },
    {
      name: "Saperavi – 0,2 l",
      price: "7,90 € / Flasche 28,50 €",
      description:
        "Kräftiger georgischer Rotwein mit Aromen von Kirsche und Brombeere.",
    },
    {
      name: "Kindzmarauli – 0,2 l",
      price: "8,80 € / Flasche 29,50 €",
      description:
        "Halbsüß, fruchtig mit Noten von Brombeeren und Kirschen.",
    },
    {
      name: "Mukuzani – 0,2 l",
      price: "8,90 € / Flasche 32,00 €",
      description:
        "Trocken, vollmundig mit intensiven Beerenaromen und Eichenfassnote.",
    },
  ],
};

export const redWines: MenuSection = {
  title: "Edle Tropfen vom Kaukasus – Rotweine",
  items: [
    {
      name: "Khvanchkara – 0,75 l",
      price: "39,00 €",
      description:
        "Halbsüß, samtig und fruchtig mit Noten von Kirschen und Pflaumen.",
    },
    {
      name: "Saperavi Qvevri – 0,75 l",
      price: "37,90 €",
      description:
        "Traditionell im Tonkrug gereift, kräftig und würzig.",
    },
    {
      name: "Saperavi Japaridze – 0,75 l",
      price: "50,00 €",
      description:
        "Vollmundig und komplex mit dunklen Beeren und feiner Würze.",
    },
  ],
};

export const whiteWines: MenuSection = {
  title: "Edle Tropfen vom Kaukasus – Weißweine",
  items: [
    {
      name: "Tvishi – 0,75 l",
      price: "32,50 €",
      description:
        "Halbsüß, fruchtig und mild mit feiner Honignote.",
    },
    {
      name: "Rkatsiteli Japaridze – 0,75 l",
      price: "34,50 €",
      description:
        "Trocken, frisch und lebendig mit Apfel- und Zitrusnoten.",
    },
    {
      name: "Mtsvane Premium – 0,75 l",
      price: "39,50 €",
      description:
        "Elegant und aromatisch mit blumigen Noten und frischer Säure.",
    },
  ],
};

export const menuSections = [
  appetizers,
  soups,
  mainDishes,
  desserts,
  redWinesByGlass,
  redWines,
  whiteWines,
];
