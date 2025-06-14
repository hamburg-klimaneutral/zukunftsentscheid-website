export const NAVIGATION_ITEMS = [
  {
    title: "Unsere Forderungen",
    items: [
      { title: "Zur Übersicht", href: "/forderungen" },
      { title: "Gesetzestext", href: "/forderungen/gesetzestext" },
      { title: "Gesetzesbegründung", href: "/forderungen/gesetzesbegründung" },
      {
        title: "Sozialverträglichkeit",
        href: "/forderungen/sozialverträglichkeit",
      },
      { title: "Jährliche Ziele", href: "/forderungen/jährliche-ziele" },
      {
        title: "Klimaneutralität 2040",
        href: "/forderungen/klimaneutralitaet-2040",
      },
    ],
  },
  { title: "So funktionierts", href: "/so-funktionierts" },
  { title: "Über uns", href: "/über-uns" },
] as const;

export const NAVIGATION_BUTTONS = [
  {
    title: "Spenden",
    href: "/spenden",
    className: "secondary shadow-[inset_0_0_0_2px_white]",
  },
  { title: "Mitmachen", href: "/mitmachen", className: "primary alt" },
];
