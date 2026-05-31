import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Handshake,
  Leaf,
  Lightbulb,
  Microscope,
  Package,
} from "lucide-react";

export type ReasonCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
};

export const reasonCards: ReasonCard[] = [
  {
    icon: Microscope,
    title: "Food Science Backed",
    description:
      "High fruit content, reduced sugar, minimal additives. Every product developed to FSSAI standards — not guesswork.",
    accentColor: "hover:border-l-crush-amber",
  },
  {
    icon: ClipboardList,
    title: "Consistent & Documented",
    description:
      "Shelf life, allergen info, technical specs ready for your procurement team. No chasing, no surprises.",
    accentColor: "hover:border-l-syrup-emerald",
  },
  {
    icon: Package,
    title: "Right Size for Every Kitchen",
    description:
      "From 300ml trial bottles to 5 Ltr bulk containers — we match your production volume, not the other way around.",
    accentColor: "hover:border-l-glaze-caramel",
  },
  {
    icon: Leaf,
    title: "Genuinely Goan",
    description:
      "Cashew Glaze. Mango Mawa Crush. Kaccha Aam Syrup. Flavours your competitors can't source anywhere else.",
    accentColor: "hover:border-l-terracotta",
  },
  {
    icon: Handshake,
    title: "Dealer Network Ready",
    description:
      "Active distribution across Western & South India. Getting Frugel to your kitchen is never a logistics problem.",
    accentColor: "hover:border-l-filling-cherry",
  },
  {
    icon: Lightbulb,
    title: "Always Innovating",
    description:
      "Whole Fruit Chunks. Shahi Dry Fruit Glaze. Mango Rabdi Crush. We launch products — you launch menus.",
    accentColor: "hover:border-l-jam-plum",
  },
];
