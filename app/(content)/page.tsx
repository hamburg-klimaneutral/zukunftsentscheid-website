import Link from "next/link";
import Image from "next/image";

import Block from "@/app/_components/block";
import HomeHero from "./home-hero";
import IconGrid, { GridIcon } from "@/app/_components/icon-grid";
import Logos from "@/app/_components/logos";
import TwingleWidget from "@/app/_components/twingle-widget";

import CollectImage from "@/app/_pictures/sammeln.png";
import SignatureImage from "@/app/_pictures/unterschriften.png";
import ClaimsOverview from "../_components/claims-overview";
import ImageBlob36 from "@/app/_components/blob-images/36";
import ImageBlob5 from "@/app/_components/blob-images/5";
import SectionBorderDecorationBlob33 from "@/app/_components/blob-section-decorators/33";
import CompactTimeline from "@/app/_components/timeline-compact";

export default function HomePage() {
  return (
    <main>
      <Block variant="green" blockClassName="z-10">
        <HomeHero />
      </Block>

      <Block variant="blue" className="pt-24">
        <h2 className="h2 underline-1 max-w-xl text-center">
          Gemeinsam machen wir Hamburgs Klimapolitik sozial, planbar und
          verantwortungsbewusst.
        </h2>
        <ClaimsOverview />
        <Link href="/" className="button secondary">
          Unsere Forderungen
        </Link>
      </Block>

      <Block>
        <SectionBorderDecorationBlob33
          firstBlobClassName="fill-green-neon"
          secondBlobClassName="fill-white"
        />
        <h2 className="h2 underline-2 text-center whitespace-pre-line">
          Über 139.000 Hamburger*innen unterstützen uns bereits.{"\n"}
          Hilf mit!
        </h2>

        <div className="content-grid">
          <ImageBlob36
            firstBlobClassName="fill-pink-light"
            secondBlobClassName="fill-blue-light"
          >
            <Image
              src={CollectImage}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Das Team von Zukunftsentscheid Hamburg bei der Unterschriftensammlung"
            />
          </ImageBlob36>
          <div className="teaser wide">
            <h3 className="h3">Was ist noch zu tun?</h3>
            <p>
              Nur mit deiner Unterstützung können wir den Entscheid zum Erfolg
              führen. Ob beim Haustürwahlkampf, auf Veranstaltungen, Plakate
              kleben, Flyer verteilen und in der Öffentlichkeitsarbeit - jede
              Hilfe ist wertvoll!
            </p>
          </div>
          <ImageBlob5
            className="max-w-[532px]"
            firstBlobClassName="fill-green-dark"
            secondBlobClassName="fill-green-neon"
          >
            <Image
              src={SignatureImage}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Zwei Mitglieder vom Zukunftsentscheid Hamburg präsentieren gesammelte Unterschriften"
            />
          </ImageBlob5>
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
        <h2 className="h2 underline-3 max-w-xl text-center">
          6 gute Gründe für dein Ja!
        </h2>
        <IconGrid>
          <GridIcon
            blobId={35}
            src="/icons/vote.svg"
            title="Deine Stimme zählt"
            className="fill-pink-light"
          >
            Unser Gesetzvorschlag wird bei einem Volksentscheid am 12.10.
            abgestimmt. Gewinnen wir, tritt unser verbessertes Klimaschutzgesetz
            in Kraft.
          </GridIcon>
          <GridIcon
            blobId={2}
            src="/icons/shake.svg"
            title="Wirtschaft & Wissenschaft an Board"
            className="fill-pink-light"
          >
            Unser Gesetz wurde gemeinsam mit Expertise aus Wissenschaft,
            Sozialverbänden und Wirtschaft entwickelt. Auch OECD und
            Handelskammer stellen in einer Studie fest: Klimaneutralität bis
            2040 ist möglich!
          </GridIcon>
          <GridIcon
            blobId={34}
            src="/icons/for-all.svg"
            title="Klimaschutz, der alle mitnimmt"
            className="fill-pink-light"
          >
            Klimaschutz, Wohlstand und soziale Gerechtigkeit sind keine
            Gegensätze. Unser Gesetz sorgt dafür, dass vom Klimaschutz alle
            profitieren.
          </GridIcon>
          <GridIcon
            blobId={5}
            src="/icons/globe.svg"
            title="Klimaschutz macht dein Leben besser"
            className="fill-pink-light"
          >
            Solaranlagen und Sanierungen sparen Energie und Geld. Ein
            zuverlässiger ÖPNV bringt dich schneller ans Ziel.
          </GridIcon>
          <GridIcon
            blobId={66}
            src="/icons/hamburg.svg"
            title="Gemeinsam für Hamburg"
            className="fill-pink-light"
          >
            Mehr als 160 Verbände und Unternehmen stehen hinter uns.
          </GridIcon>
          <GridIcon
            blobId={3}
            src="/icons/heart-hand.svg"
            title="Was wir wollen, bewegt viele"
            className="fill-pink-light"
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
          <Link className="button secondary" href="/so-funktionierts">
            So funktionierts
          </Link>
        </div>

        <CompactTimeline />
      </Block>

      <Block variant="green" className="justify-around sm:flex-row">
        <div className="teaser">
          <h2 className="h2">Spenden</h2>
          <p>
            Der Hamburger Zukunftsentscheid wird ausschließlich durch Spenden
            und Förderungen finanziert. Mit deiner Spende machst du ein besseres
            Klimaschutzgesetz für Hamburg möglich!
          </p>
          <Link className="button secondary alt" href="/spenden">
            Mehr erfahren
          </Link>
        </div>
        {/* @TODO: use old project name to keep history */}
        <TwingleWidget
          projectName="next-test-startseite"
          projectId="tw683f2b611d1ed"
          className="sm:max-w-[450px]"
        />
      </Block>
    </main>
  );
}
