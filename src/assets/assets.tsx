import { Calculator, Home, Map, MessageCircle } from "lucide-react";
import { JSX } from "react";

import logo from "@/assets/images/logo_square.png"

export interface NavigationItemProps {
  href: string;
  label: string;
  icon: JSX.Element;
  isActive: boolean;
}

export const images = {
  logo,
}

export const navItems = [
  {
    href: "/",
    label: "Home",
    icon: (
      <Home
        size={20}
        strokeWidth={3}
      />
    ),
  },
  {
    href: "/routes",
    label: "Routes",
    icon: (
      <Map
        size={20}
        strokeWidth={3}
      />
    ),
  },
  {
    href: "/fare",
    label: "Fare",
    icon: (
      <Calculator
        size={20}
        strokeWidth={3}
      />
    ),
  },
  {
    href: "/feedback",
    label: "Feedback",
    icon: (
      <MessageCircle
        size={20}
        strokeWidth={3}
      />
    ),
  },
];
