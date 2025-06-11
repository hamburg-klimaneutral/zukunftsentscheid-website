import Image from "next/image";
import Link from "next/link";

import Icon from "@/app/icon.png";
import HeroImage from "@/app/_pictures/12.10.png";
import Hero from "@/app/_components/hero";
import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";

export default function HomeHero() {
  return (
    <Hero
      asset={
        <figure className="relative z-0">
          <Image
            sizes="100vw"
            className="h-auto w-full"
            src={HeroImage}
            alt="Das Team von Zukunftsentscheid Hamburg präsentiert den Termin der Volksabstimmung am 12.10.2025 vor der Kulisse des Hamburger Rathauses."
            priority
          />
          <div className="h3 text-green-dark absolute top-4 right-10 -rotate-12 transform bg-white px-2.5 py-1 sm:top-1/4 sm:-right-2">
            Sag ja
            <Image
              src={Icon}
              className="inline h-7 w-auto sm:h-11"
              aria-hidden="true"
              alt=""
              priority
            />
            <br />
            zu Hamburg
          </div>
          <ResponsivePositionedBlob
            id={4}
            className="fill-green-neon"
            positionPercentages={{ top: 47, left: 94.6 }}
            heightPercentage={13.2}
          />
          <ResponsivePositionedBlob
            id={45}
            className="fill-blue-light -z-1"
            positionPercentages={{ top: 42, left: 81 }}
            heightPercentage={48}
          />
        </figure>
      }
    >
      <h1 className="h1 block whitespace-pre-line lg:hidden">
        Mit dem{"\n"}
        <mark>Volksentscheid</mark> am{"\n"}
        12.10. geben wir{"\n"}
        Hamburg ein <mark className="short">besseres</mark>
        {"\n"}
        <mark className="long">Klimaschutzgesetz!</mark>
      </h1>
      <h1 className="h1 hidden lg:block">
        Mit dem <mark>Volksentscheid</mark> am{"\n"}
        12.10. geben wir Hamburg ein
        {"\n"}
        <mark className="long text-nowrap">besseres Klimaschutzgesetz!</mark>
      </h1>
      <p>Hamburg entscheidet fürs Klima - sei dabei!</p>
      <Link className="button primary" href="/">
        Jetzt Mitmachen
      </Link>
    </Hero>
  );
}
