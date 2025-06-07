import Image from "next/image";
import Link from "next/link";

import MietvereinLogo from "@/app/_logos/mietverein.png";
import StPauliLogo from "@/app/_logos/st-pauli.png";
import SchauspielhausLogo from "@/app/_logos/schauspielhaus.png";
import CaritasLogo from "@/app/_logos/caritas.png";
import VerdiLogo from "@/app/_logos/verdi.png";
import FffLogo from "@/app/_logos/fff.png";
import DibLogo from "@/app/_logos/dib.png";
import PatgoniaLogo from "@/app/_logos/patagonia.png";
import SkhLogo from "@/app/_logos/skh.png";
import KunsthalleLogo from "@/app/_logos/kunsthalle.png";
import DavLogo from "@/app/_logos/dav.png";
import FarbenmeerLogo from "@/app/_logos/farbenmeer.png";
import CampactLogo from "@/app/_logos/campact.png";
import GreenpeaceLogo from "@/app/_logos/greenpeace.png";
import NabuLogo from "@/app/_logos/nabu.png";
import GoldeimerLogo from "@/app/_logos/goldeimer.png";

const LOGOS = [
  {
    src: MietvereinLogo,
    alt: "Logo des Mietervereins Hamburg",
    href: "https://www.mieterverein-hamburg.de/",
  },
  {
    src: StPauliLogo,
    alt: "Logo des FC St. Pauli",
    href: "https://www.fcstpauli.com/",
  },
  {
    src: SchauspielhausLogo,
    alt: "Logo des Deutschen Schauspielhauses Hamburg",
    href: "https://schauspielhaus.de/",
  },
  {
    src: CaritasLogo,
    alt: "Logo der Caritas im Norden",
    href: "https://www.caritas-im-norden.de/",
  },
  {
    src: VerdiLogo,
    alt: "Logo von ver.di",
    href: "https://www.verdi.de/",
  },
  {
    src: FffLogo,
    alt: "Logo von Fridays for Future",
    href: "https://fridaysforfuture.org/",
  },
  {
    src: DibLogo,
    alt: "Logo des deutschen Ingenieurinnenbunds",
    href: "https://dibev.de/",
  },
  {
    src: PatgoniaLogo,
    alt: "Logo von Patagonia",
    href: "https://eu.patagonia.com",
  },
  {
    src: SkhLogo,
    alt: "Logo der Schüler:innenkammer Hamburg",
    href: "https://www.skh.de/",
  },
  {
    src: KunsthalleLogo,
    alt: "Logo der Hamburger Kunsthalle",
    href: "https://www.hamburger-kunsthalle.de",
  },
  {
    src: DavLogo,
    alt: "Logo des Deutschen Alpenvereins Hamburg",
    href: "https://www.dav-hamburg.de",
  },
  {
    src: FarbenmeerLogo,
    alt: "Logo von Farbenmeer",
    href: "https://farbenmeer.de/",
  },
  {
    src: CampactLogo,
    alt: "Logo von Campact",
    href: "https://www.campact.de/",
  },
  {
    src: GreenpeaceLogo,
    alt: "Logo von Greenpeace Hamburg",
    href: "https://www.greenpeace-hamburg.de/",
  },
  {
    src: NabuLogo,
    alt: "Logo des NABU",
    href: "https://www.nabu.de/",
  },
  {
    src: GoldeimerLogo,
    alt: "Logo von Goldeimer",
    href: "https://goldeimer.de/",
  },
] as const;

export default function Logos() {
  return (
    <ul className="flex w-full flex-wrap items-center justify-between gap-4">
      <li>
        <p className="w-[150px]">Wir werden u.a. unterstützt von</p>
      </li>
      {LOGOS.map((logo) => (
        <li key={logo.href}>
          <Link
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              height={64}
              className="transition-transform group-hover:scale-110"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
