import Image from "next/image";
import Link from "next/link";
import MietvereinLogo from "@/app/logos/mietverein.png";
import StPauliLogo from "@/app/logos/st-pauli.png";
import SchauspielhausLogo from "@/app/logos/schauspielhaus.png";
import CaritasLogo from "@/app/logos/caritas.png";
import VerdiLogo from "@/app/logos/verdi.png";
import FffLogo from "@/app/logos/fff.png";
import DibLogo from "@/app/logos/dib.png";
import PatgoniaLogo from "@/app/logos/patagonia.png";
import SkhLogo from "@/app/logos/skh.png";
import KunsthalleLogo from "@/app/logos/kunsthalle.png";
import DavLogo from "@/app/logos/dav.png";
import FarbenmeerLogo from "@/app/logos/farbenmeer.png";
import CampactLogo from "@/app/logos/campact.png";
import GreenpeaceLogo from "@/app/logos/greenpeace.png";
import NabuLogo from "@/app/logos/nabu.png";
import GoldeimerLogo from "@/app/logos/goldeimer.png";
import { twMerge } from "tailwind-merge";

export default function LogoBlock({ className }: { className?: string }) {
  return (
    <ul
      className={twMerge(
        className,
        "flex flex-wrap justify-between w-full gap-4 items-center",
      )}
    >
      <li>
        <p className="w-[150px]">Wir werden u.a. unterstützt von</p>
      </li>
      <li>
        <Link
          href="https://www.mieterverein-hamburg.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={MietvereinLogo}
            alt="Logo dev Mietvereins zu Hamburg"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.fcstpauli.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={StPauliLogo}
            alt="Logo des FC St. Pauli"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://schauspielhaus.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={SchauspielhausLogo}
            alt="Logo vos Deuschen Schauspielhauses Hamburg"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.caritas-im-norden.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={CaritasLogo}
            alt="Logo der Caritas im Norden"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.verdi.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={VerdiLogo}
            alt="Logo von ver.di"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://fridaysforfuture.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={FffLogo}
            alt="Logo von Fridays for Future"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://dibev.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={DibLogo}
            alt="Logo des deutschen Ingenieurinnenbunds"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://eu.patagonia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={PatgoniaLogo}
            alt="Logo von Patagonia"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.skh.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={SkhLogo}
            alt="Logo der Schüler:innenkammer Hamburg"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.hamburger-kunsthalle.de"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={KunsthalleLogo}
            alt="Logo der Hamburger Kunsthalle"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.dav-hamburg.de"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={DavLogo}
            alt="Logo des Deutschen Alpenvereins Hamburg"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://farbenmeer.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={FarbenmeerLogo}
            alt="Logo von farbenmeer"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.campact.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={CampactLogo}
            alt="Logo von Campact"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.greenpeace-hamburg.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={GreenpeaceLogo}
            alt="Logo von Greenpeace Hamburg"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.nabu.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={NabuLogo}
            alt="Logo des NABU"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://goldeimer.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={GoldeimerLogo}
            alt="Logo von Goldeimer"
            height={64}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </li>
    </ul>
  );
}
