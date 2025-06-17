import Hero from "@/app/_components/hero";
import Block from "@/app/_components/block";
import GetInvolvedBlock from "@/app/_components/getInvolvedBlock";
import Image from "next/image";
import HeaderImage from "@/app/_pictures/placeholders/369x433.png";
import Sozialvertraeglichkeit from "@/app/_pictures/placeholders/3384x2512.png";
import JaehrlicheZiele from "@/app/_pictures/placeholders/3276x2551.png";
import Klimaneutralitaet2040 from "@/app/_pictures/placeholders/2731x2731.png";
import QuoteAuthor from "@/app/_pictures/placeholders/532.png";
import ImageBlob36Alt from "@/app/_components/blob-images/36-alt";
import ImageBlob88Rotated from "@/app/_components/blob-images/88-rotated";
import ImageBlob68Rotated from "@/app/_components/blob-images/68-rotated";
import Link from "next/link";
import BlockQuote from "@/app/_components/block-quote";
import IconGrid, { GridIcon } from "@/app/_components/icon-grid";
import ImageBlob36 from "@/app/_components/blob-images/36";
import CollectImage from "@/app/_pictures/sammeln.png";
import InfoBox from "@/app/_components/info-box";
import ImageBlob45Rotated from "@/app/_components/blob-images/45-rotated";

export default function ForderungenPage() {
  return (
    <main>
      <Block variant="green" blockClassName="z-10">
        <Hero
          asset={
            <ImageBlob45Rotated
              firstBlobClassName="fill-pink-light"
              secondBlobClassName="fill-green-neon"
            >
              {/* TODO: replace image and set alt tag */}
              <Image
                src={HeaderImage}
                sizes="(min-width: 640px) 530px, 100vw"
                placeholder="blur"
                alt=""
              />
            </ImageBlob45Rotated>
          }
        >
          <h1>Unsere Forderungen</h1>
          <h2 className="h1 max-w-lg">
            Gemeinsam machen wir Hamburgs Klimapolitik sozial, planbar und
            verantwortungsbewusst!
          </h2>
        </Hero>
      </Block>
      <Block className="gap-24">
        <div className="max-w-xl space-y-2 text-center">
          <p className="text-tiny">Die Forderungen</p>
          <h2 className="h2">
            Ein Gesetz, das funktioniert – und das zu Hamburg passt.
          </h2>
          <p>
            Basierend auf{" "}
            <strong>
              Expertise aus Wissenschaft, Wirtschaft, von Sozialverbänden und
              den zuständigen Hamburger Behörden
            </strong>{" "}
            ist der Hamburger Zukunftsentscheid entstanden.
          </p>
        </div>
        <div className="content-grid">
          <ImageBlob68Rotated
            className="max-w-md"
            firstBlobClassName={"fill-blue-light"}
            secondBlobClassName={"fill-white"}
            secondBlobChildren={
              <Image
                width={53}
                height={53}
                className="absolute top-[28%] left-[28%] w-[45%]"
                src="/icons/handshake.svg"
                alt=""
                aria-hidden
              />
            }
          >
            {/* TODO: replace image and set alt tag */}
            <Image
              src={Sozialvertraeglichkeit}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt=""
            />
          </ImageBlob68Rotated>
          <div>
            <h2 className="h2 mb-4">Verpflichtende Sozialverträglichkeit</h2>
            <p>
              Wenn wir unsere Stadt zukunftsfähig machen, profitieren wir alle!
              Und wir sichern, dass Klimaschutz{" "}
              <strong>
                für alle bezahlbar bleibt: mit günstigen Öffis und niedrigen
                Strom- und Wohnkosten.
              </strong>
            </p>
            <Link
              href="/forderungen/sozialvertraeglichkeit"
              className="button secondary alt mt-8"
            >
              Mehr dazu
            </Link>
          </div>
          <ImageBlob88Rotated
            className="max-w-md"
            firstBlobClassName={"fill-green-neon"}
            secondBlobClassName={"fill-white"}
            secondBlobChildren={
              <Image
                width={53}
                height={53}
                className="absolute top-[28%] left-[28%] w-[45%]"
                src="/icons/clock.svg"
                alt=""
                aria-hidden
              />
            }
          >
            {/* TODO: replace image and set alt tag */}
            <Image
              src={JaehrlicheZiele}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt=""
            />
          </ImageBlob88Rotated>
          <div>
            <h2 className="h2 mb-4">Jährliche Ziele</h2>
            <p>
              Ehrlichkeit beginnt mit realistischen Zielen: mit deinem JA wird
              Hamburgs{" "}
              <strong>
                Klimapolitik für alle transparent und nachvollziehbar
              </strong>
              . Das schafft Sicherheit und Verlässlichkeit für Hamburgs
              Bevölkerung, Unternehmen und zukünftige Generationen. Dabei muss
              Hamburg{" "}
              <strong>
                nur so viel leisten, wie unsere Hansestadt realistisch umsetzen
                kann.
              </strong>
            </p>
            <Link
              href="/forderungen/jaehrliche-ziele"
              className="button secondary alt mt-8"
            >
              Mehr dazu
            </Link>
          </div>
          <ImageBlob36Alt
            className="max-w-md"
            firstBlobClassName={"fill-pink-light"}
            secondBlobClassName={"fill-white"}
            secondBlobChildren={
              <Image
                width={53}
                height={53}
                className="absolute top-[28%] left-[28%] w-[45%]"
                src="/icons/muscle.svg"
                alt=""
                aria-hidden
              />
            }
          >
            {/* TODO: replace image and set alt tag */}
            <Image
              src={Klimaneutralitaet2040}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt=""
            />
          </ImageBlob36Alt>
          <div>
            <h2 className="h2 mb-4">Klimaneutralität 2040</h2>
            <p>
              Wir stellen unsere Wirtschaft für die Zukunft auf und bleiben ein{" "}
              <strong>
                attraktiver Wirtschaftsstandort, in dem Unternehmen
                zukunftssichere Jobs schaffen
              </strong>
              . Deshalb haben sich auch wichtige Wirtschaftsakteure wie die
              Handelskammer das Ziel gesetzt, 2040 klimaneutral zu sein.
            </p>
            <Link
              href="/forderungen/klimaneutralitaet-2040"
              className="button secondary alt mt-8"
            >
              Mehr dazu
            </Link>
          </div>
        </div>
      </Block>
      <Block variant="green">
        <BlockQuote
          author="Torben, 31, Ingenieur"
          quote="Ich bin dabei, weil ich weiß, wie die Energiewende aussehen soll und ich hier endlich anpacken kann!"
          blobClassName={"fill-pink-light"}
          quoteSignClassName={"fill-pink-dark"}
          imageSrc={QuoteAuthor}
        />
      </Block>

      <Block variant="blue">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:justify-between md:gap-12">
          <div className="max-w-md">
            <p className="text-tiny mb-2">Ablauf & Wahl</p>
            <h2 className="h2 mb-4">Wir verbessern das Klimaschutzgesetz</h2>
            <div className="space-y-4">
              <p>
                Am 12.10. (oder per Briefwahl in den vorhergehenden Wochen)
                können alle hamburgischen Wahlberechtigten abstimmen. Bei der
                Wahl gilt es, zwei Hürden zu nehmen und{" "}
                <strong>
                  bei Erfolg gelten 2026 dann die verbindlichen Jahresziele
                </strong>
                , die verpflichtende Sozialverträglichkeit und die
                Klimaneutralität 2040 als verpflichtende Grundlage allen
                behördlichen Handelns.
              </p>
              <p>
                Und das Beste? Unsere Entscheidung kann in den Folgejahren nicht
                angefochten oder abgeschwächt werden, denn{" "}
                <strong>sie ist als Volksentscheid besonders geschützt.</strong>
              </p>
            </div>
            <Link href="/so-funktionierts" className="button secondary mt-8">
              {"So funktioniert's"}
            </Link>
          </div>
          <div className="flex max-w-md flex-col items-stretch gap-3">
            <InfoBox
              title="Hürde 1"
              iconSrc="/icons/construction.svg"
              variant="blue"
              round
              border={false}
            >
              <p>Eine einfache Mehrheit, also mehr als 50% Ja Stimmen</p>
            </InfoBox>
            <Image
              className="mx-auto"
              height={24}
              width={24}
              src="/icons/arrow-big-down.svg"
              alt="Pfeil nach unten"
            />
            <InfoBox
              title="Hürde 2"
              iconSrc="/icons/construction.svg"
              variant="blue"
              round
              border={false}
            >
              <p>
                Erfüllung des Zustimmungsquorums (mindestens 265.000 JA-Stimmen)
              </p>
            </InfoBox>
            <Image
              className="mx-auto"
              height={24}
              width={24}
              src="/icons/arrow-big-down.svg"
              alt="Pfeil nach unten"
            />
            <InfoBox
              title="Gewinn des Volksentscheids"
              iconSrc="/icons/party-popper.svg"
              variant="white"
              round
              border
            >
              <p>Das bessere Klimaschutzgesetz tritt in Kraft</p>
            </InfoBox>
          </div>
        </div>
      </Block>

      <Block>
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
            <div>
              <p className="text-tiny mb-2">Klimaneutral 2045 ist zu spät</p>
              <h2 className="h2 mb-4">
                Wir brauchen Jetzt ein Klimaschutzverbesserungsgesetz!
              </h2>
              <div className="space-y-4">
                <p>
                  Das Hamburgische Klimaschutzgesetz soll einen Beitrag zur
                  Erreichung des Pariser Abkommens leisten.{" "}
                  <strong>
                    Wie viel CO2 insgesamt bis zur Klimaneutralität 2045
                    ausgestoßen werden darf, ist nicht begrenzt
                  </strong>
                  . So lässt die Stadt offen, welchen Beitrag sie leisten will.
                </p>
                <p>
                  Als würde man sich vornehmen in 20 Jahren weniger zu rauchen
                  und bis dahin seinen Konsum nochmal richtig anfeuern.
                </p>
                <p>
                  Die Klimaneutralität 2045 kommt zu spät - und{" "}
                  <strong>auf dem Weg dahin fehlt der Fahrplan</strong>. Wir
                  müssen jetzt handeln.
                </p>
                <div className="mt-8 flex flex-row gap-4">
                  <Link
                    href="/forderungen/gesetz-lesefassung"
                    className="button secondary alt"
                  >
                    Lesefassung Gesetz
                  </Link>
                  <Link
                    href="/forderungen/gesetz-begruendung"
                    className="button secondary alt"
                  >
                    Gesetzesbegründung
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Block>

      <GetInvolvedBlock variant="pinkLight" />

      <Block variant="green" className="gap-14">
        <div className="text-center">
          <h2 className="text-tiny mb-2">Klima ist ein Querschnittsthema</h2>
          <h3 className="h2">Klima betrifft alle bereiche. Wie genau?</h3>
        </div>

        <IconGrid>
          <GridIcon
            blobId={35}
            src="/icons/trending-up.svg"
            title="Wirtschaft"
            className="fill-pink-light"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Link href="/" className="button tertiary alt mt-6">
              Mehr dazu
            </Link>
          </GridIcon>
          <GridIcon
            blobId={2}
            src="/icons/home.svg"
            title="Mieten und Gebäude"
            className="fill-pink-light"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Link href="/" className="button tertiary alt mt-6">
              Mehr dazu
            </Link>
          </GridIcon>
          <GridIcon
            blobId={34}
            src="/icons/plug-zap-2.svg"
            title="Energie"
            className="fill-pink-light"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Link href="/" className="button tertiary alt mt-6">
              Mehr dazu
            </Link>
          </GridIcon>
          <GridIcon
            blobId={5}
            src="/icons/bus.svg"
            title="Mobilität & ÖPNV"
            className="fill-pink-light"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Link href="/" className="button tertiary alt mt-6">
              Mehr dazu
            </Link>
          </GridIcon>
          <GridIcon
            blobId={3}
            src="/icons/trash-2.svg"
            title="Abfallwirtschaft"
            className="fill-pink-light"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Link href="/" className="button tertiary alt mt-6">
              Mehr dazu
            </Link>
          </GridIcon>
          <GridIcon
            blobId={66}
            src="/icons/heart-hand.svg"
            title="Lorem Ipsum"
            className="fill-pink-light"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <Link href="/" className="button tertiary alt mt-6">
              Mehr dazu
            </Link>
          </GridIcon>
        </IconGrid>
      </Block>

      <Block>
        <div className="max-w-lg text-center">
          <h2 className="h2 mb-4">Noch Fragen?</h2>
          <p>
            Es ist noch eine Frage offen geblieben oder ein Thema nicht
            angesprochen worden? Dann schau ins FAQ oder schreib uns eine
            Nachricht!
          </p>
          <div className="mt-8 flex flex-row justify-center gap-3">
            <Link className="button secondary alt" href="/kontakt">
              Schreib uns
            </Link>
            <Link className="button secondary alt" href="/fragen-und-antworten">
              FAQ Bereich
            </Link>
          </div>
        </div>
      </Block>
    </main>
  );
}
