import Image from "next/image";
import Link from "next/link";

import Icon from "@/app/icon.png";
import HeroImage from "@/app/_pictures/12.10.png";
import Hero from "@/app/_components/hero";

export default function HomeHero() {
  return (
    <Hero
      asset={
        <>
          <Image
            sizes="100vw"
            className="h-auto w-full"
            src={HeroImage}
            alt="Das Team von Zukunftsentscheid Hamburg präsentiert den Termin der Volksabstimmung am 12.10.2025 vor der Kulisse des Hamburger Rathauses."
            priority
          />
          <div className="right-10 sm:-right-2 -rotate-12 absolute top-4 sm:top-1/4 bg-white h3 px-2.5 py-1 transform text-green-dark">
            Sag ja
            <Image
              src={Icon}
              className="h-7 w-auto inline sm:h-11"
              aria-hidden="true"
              alt=""
              priority
            />
            <br />
            zu Hamburg
          </div>
        </>
      }
    >
      <h1 className="block h1 lg:hidden whitespace-pre-line">
        Mit dem{"\n"}
        <mark>Volksentscheid</mark> am{"\n"}
        12.10. geben wir{"\n"}
        Hamburg ein <mark className="short">besseres</mark>
        {"\n"}
        <mark className="long">Klimaschutzgesetz!</mark>
      </h1>
      <h1 className="hidden h1 lg:block">
        Mit dem <mark>Volksentscheid</mark> am{"\n"}
        12.10. geben wir Hamburg ein
        {"\n"}
        <mark className="long text-nowrap">
          besseres Klimaschutzgesetz!
        </mark>
      </h1>
      <p>Hamburg entscheidet fürs Klima - sei dabei!</p>
      <Link className="button primary" href="/">
        Jetzt Mitmachen
      </Link>
    </Hero>
  )
}
