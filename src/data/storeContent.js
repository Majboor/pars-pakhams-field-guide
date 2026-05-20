const merch = (name) => `/assets/pakhams/generated-merch-guides/${name}`;

export const storeCategories = [
  { id: "all", label: "All" },
  { id: "wearables", label: "Wearables" },
  { id: "caps", label: "Caps" },
  { id: "guides", label: "Guides" }
];

export const storeProducts = [
  {
    id: "pars-logo-shirt",
    category: "wearables",
    name: "PARS Logo Shirt",
    subtitle: "Cotton shirt with front PARS mark and back Radio Amateur print.",
    description:
      "A clean PARS society shirt for meetings, field days, radio workshops, and everyday wear. Choose black or white, then pick a size before adding it to the cart.",
    price: 2600,
    options: {
      size: ["S", "M", "L", "XL", "XXL"]
    },
    variants: [
      {
        id: "black",
        color: "Black",
        swatch: "#111111",
        images: [merch("shirt-black-front-logo.png"), merch("shirt-black-back-radio-amateur.png")]
      },
      {
        id: "white",
        color: "White",
        swatch: "#f6f3e8",
        images: [merch("shirt-white-front-logo.png"), merch("shirt-white-back-radio-amateur.png")]
      }
    ]
  },
  {
    id: "pars-field-cap",
    category: "caps",
    name: "PARS Field Cap",
    subtitle: "Structured cap with embroidered PARS diamond mark.",
    description:
      "A field-ready cap for outdoor activity, club events, and casual station days. The same PARS mark is available in black or white.",
    price: 1800,
    options: {
      size: ["Adjustable"]
    },
    variants: [
      {
        id: "black",
        color: "Black",
        swatch: "#111111",
        images: [merch("cap-black-front.png")]
      },
      {
        id: "white",
        color: "White",
        swatch: "#f6f3e8",
        images: [merch("cap-white-front.png")]
      }
    ]
  },
  {
    id: "what-is-radio",
    category: "guides",
    name: "What Is Radio?",
    subtitle: "Beginner guide to signals, stations, and communication.",
    description:
      "A first-step printed guide for new listeners who want to understand radio signals, stations, and the basic idea behind communication on the air.",
    price: 950,
    options: {
      format: ["Print"]
    },
    variants: [
      {
        id: "print",
        color: "Print",
        swatch: "#0b3b23",
        images: [merch("guide-what-is-radio.png")]
      }
    ]
  },
  {
    id: "build-your-first-antenna",
    category: "guides",
    name: "Build Your First Antenna",
    subtitle: "Simple wire, VHF, and home station projects.",
    description:
      "A practical printed guide for first antenna projects, including simple wire builds, VHF ideas, and home station planning notes.",
    price: 1200,
    options: {
      format: ["Print"]
    },
    variants: [
      {
        id: "print",
        color: "Print",
        swatch: "#0b3b23",
        images: [merch("guide-build-your-first-antenna.png")]
      }
    ]
  },
  {
    id: "amateur-radio-license-guide",
    category: "guides",
    name: "Guide to an Amateur Radio License",
    subtitle: "Rules, exam prep, and first callsign steps.",
    description:
      "A printed companion for the licensing path, with rule reminders, exam prep framing, and first callsign steps for new Pakistani amateurs.",
    price: 1100,
    options: {
      format: ["Print"]
    },
    variants: [
      {
        id: "print",
        color: "Print",
        swatch: "#0b3b23",
        images: [merch("guide-amateur-radio-license.png")]
      }
    ]
  },
  {
    id: "ham-radio-operating-basics",
    category: "guides",
    name: "Ham Radio Operating Basics",
    subtitle: "Calling, logging, etiquette, and first contacts.",
    description:
      "A printed operating primer for calling, listening, logging, etiquette, and keeping first contacts calm and correct.",
    price: 1100,
    options: {
      format: ["Print"]
    },
    variants: [
      {
        id: "print",
        color: "Print",
        swatch: "#0b3b23",
        images: [merch("guide-operating-basics.png")]
      }
    ]
  },
  {
    id: "emergency-radio-communications",
    category: "guides",
    name: "Emergency Radio Communications",
    subtitle: "Preparedness, field nets, and disaster response.",
    description:
      "A printed emergency communications guide covering preparedness, field nets, response discipline, and practical radio service thinking.",
    price: 1300,
    options: {
      format: ["Print"]
    },
    variants: [
      {
        id: "print",
        color: "Print",
        swatch: "#0b3b23",
        images: [merch("guide-emergency-radio-communications.png")]
      }
    ]
  }
];

export function getStoreProduct(id) {
  return storeProducts.find((product) => product.id === id);
}
