import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import Block from "@/app/components/block";
import HomeHero from "./home-hero";
import IconGrid, { GridIcon } from "@/app/components/icon-grid";
import Logos from "@/app/components/logos";
import Timeline from "@/app/components/timeline";

import CollectImage from "@/app/pictures/sammeln.png";
import SignatureImage from "@/app/pictures/unterschriften.png";

export default function HomePage() {
  return (
    <main>
      <Block variant="green">
        <HomeHero />
      </Block>

      <Block variant="blue" className="pt-24">
        <h2 className="h2 text-center max-w-xl underline-1">
          Gemeinsam machen wir Hamburgs Klimapolitik sozial, planbar und
          verantwortungsbewusst.
        </h2>
        <IconGrid>
          <GridIcon src="/icons/check.svg" title="Sozialverträglichkeit">
            Fairer Klimaschutz,{"\n"}
            der für alle bezahlbar bleibt.
            <Link href="/" className="button">
              mehr dazu
            </Link>
          </GridIcon>
          <GridIcon src="/icons/clock.svg" title="Jährliche Ziele">
            Planbarkeit und Transparenz{"\n"}
            für Menschen und Wirtschaft.
            <Link href="/" className="button">
              mehr dazu
            </Link>
          </GridIcon>
          <GridIcon src="/icons/muscle.svg" title="Klimaneutralität 2040">
            Ein verantwortungsvoller und{"\n"}
            wettbewerbsfähiger Beitrag unserer Stadt.
            <Link href="/" className="button">
              mehr dazu
            </Link>
          </GridIcon>
        </IconGrid>
        <Link href="/" className="button secondary">
          Unsere Forderungen
        </Link>
      </Block>

      <Block>
        <h2 className="h2 text-center underline-2 whitespace-pre-line">
          Über 139.000 Hamburger*innen unterstützen uns bereits.{"\n"}
          Hilf mit!
        </h2>

        <div className="content-grid">
          <figure>
            <Image
              src={CollectImage}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Das Team von Zukunftsentscheid Hamburg bei der Unterschriftensammlung"
            />
          </figure>
          <div className="teaser wide">
            <h3 className="h3">Was ist noch zu tun?</h3>
            <p>Nur mit deiner Unterstützung können wir den Entscheid zum Erfolg
            führen. Ob beim Haustürwahlkampf, auf Veranstaltungen, Plakate
            kleben, Flyer verteilen und in der Öffentlichkeitsarbeit - jede
            Hilfe ist wertvoll!</p>
          </div>
          <figure className="hidden sm:block">
            <Image
              src={SignatureImage}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Zwei Mitglieder vom Zukunftsentscheid Hamburg präsentieren gesammelte Unterschriften"
            />
          </figure>
          <div className="teaser wide">
            <h3 className="h3">Wie kannst du helfen?</h3>
            <p>
              Komm zu einem unserer Infotreffen - jeden Mittwoch um 18:30 Uhr in
              der Kampstraße 15. Oder unterstütze uns bei Aktionen!
            </p>
            <Link href="/" className="button primary">
              Mitmach-Möglichkeiten
            </Link>
          </div>
        </div>
      </Block>

      <Block variant="green">
        <h2 className="h2 text-center max-w-xl">6 gute Gründe für dein Ja!</h2>
        <IconGrid>
          <GridIcon src="/icons/vote.svg" title="Deine Stimme zählt">
            Unser Gesetzvorschlag wird bei einem Volksentscheid am 12.10.
            abgestimmt. Gewinnen wir, tritt unser verbessertes Klimaschutzgesetz
            in Kraft.
          </GridIcon>
          <GridIcon
            src="/icons/shake.svg"
            title="Wirtschaft & Wissenschaft an Board"
          >
            Unser Gesetz wurde gemeinsam mit Expertise aus Wissenschaft,
            Sozialverbänden und Wirtschaft entwickelt. Auch OECD und
            Handelskammer stellen in einer Studie fest: Klimaneutralität bis
            2040 ist möglich!
          </GridIcon>
          <GridIcon
            src="/icons/for-all.svg"
            title="Klimaschutz, der alle mitnimmt"
          >
            Klimaschutz, Wohlstand und soziale Gerechtigkeit sind keine
            Gegensätze. Unser Gesetz sorgt dafür, dass vom Klimaschutz alle
            profitieren.
          </GridIcon>
          <GridIcon
            src="/icons/globe.svg"
            title="Klimaschutz macht dein Leben besser"
          >
            Solaranlagen und Sanierungen sparen Energie und Geld. Ein
            zuverlässiger ÖPNV bringt dich schneller ans Ziel.
          </GridIcon>
          <GridIcon src="/icons/hamburg.svg" title="Gemeinsam für Hamburg">
            Mehr als 160 Verbände und Unternehmen stehen hinter uns.
          </GridIcon>
          <GridIcon
            src="/icons/heart-hand.svg"
            title="Was wir wollen, bewegt viele"
          >
            Über 139.000 Hamburger*innen haben den Zukunftsentscheid bereits
            unterstützt. Jetzt kommt es auf dich an!
          </GridIcon>
        </IconGrid>
      </Block>

      <Block variant="blue">
        <Logos />
      </Block>

      <Block className="justify-around sm:flex-row">
        <div className="teaser">
          <h2 className="h2">
            Kurz vor Klimaschutzgesetz: Lasst uns den letzten Schritt zusammen
            gehen
          </h2>
          <p>
            Damit ein Gesetz ein einer Volksabstimmung beschlossen werden kann,
            muss es drei Phasen durchlaufen: Die Volksinitiative, das
            Volksbegehren und den Volksentscheid.
          </p>
          <p>
            Dabei müssen immer mehr Menschen in immer kürzerer Zeit den
            Hamburger Zukunftsentscheid unterstützen. Schon seit Juni 2023
            arbeiten viele Menschen daran, dass wir das schaffen.
          </p>
          <Link className="button secondary" href="/">
            So funktionierts
          </Link>
        </div>

        <Timeline />
      </Block>

      <Block variant="green" className="sm:flex-row justify-around">
        <div className="teaser">
          <h2 className="h2">Spenden</h2>
          <p>
            Der Hamburger Zukunftsentscheid wird ausschließlich durch Spenden
            und Förderungen finanziert. Mit deiner Spende machst du ein
            besseres Klimaschutzgesetz für Hamburg möglich!
          </p>
          <Link className="button secondary alt" href="/">
            Mehr erfahren
          </Link>
        </div>
        <Script
          src="https://spenden.twingle.de/embed/hamburg-klimaneutral/testprojekt/tw67beebe41b6eb/widget/foo"
          strategy="lazyOnload"
        />
        <div
          id="twingle-public-embed-foo"
          className="w-full sm:max-w-[450px]"
          aria-label="Spenden Widget"
        />
      </Block>
    </main>
  );
}
