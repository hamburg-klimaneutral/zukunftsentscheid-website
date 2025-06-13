import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import IconGrid, { GridIcon } from "@/app/_components/icon-grid";
import Link from "next/link";
import TwoColumnBlock from "@/app/_components/two-column-block";
import BlockQuote from "@/app/_components/block-quote";
import Image from "next/image";
import GrosseventsImage from "@/app/_pictures/grossevents.png";
import HaustuerwahlkampfImage from "@/app/_pictures/haustuerwahlkampf.png";
import InfostaendeImage from "@/app/_pictures/infostaende.png";
import LokaleVeranstaltungenImage from "@/app/_pictures/lokale_veranstaltungen.png";
import {
  DISTRICT_TELEGRAM_INVITE_LINKS,
  INFO_CHANNEL_INVITE_LINKS,
} from "@/app/config";
import SvgHhDistrictMapWithStylesAndLinks from "@/app/_svg/hh-district-map-with-styles-and-links";

interface ThisIsHowWeWinGridItemProps {
  title: string;
  href: string;
  asset: React.ReactNode;
  children: React.ReactNode;
}

function ThisIsHowWeWinGridItem({
  asset,
  title,
  href,
  children,
}: ThisIsHowWeWinGridItemProps) {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <figure className="relative mb-10 max-w-xs min-w-1/4 basis-1/2">
          {asset}
        </figure>

        <h3 className="h3 mb-4">{title}</h3>
        <p>{children}</p>
        <Link href={href} className="button secondary alt mt-6">
          Mehr dazu
        </Link>
      </div>
    </>
  );
}

export default function MitmachenPage() {
  return (
    <>
      <Block variant="green">
        <Hero asset={<></>}>
          <h1>Mitmachen</h1>
          <h2 className="h1">
            Endlich sozialer Klimaschutz.
            <br />
            Du machst den Unterschied!
          </h2>
        </Hero>
      </Block>
      <Block>
        <div className="max-w-xl space-y-4">
          <p>
            Mindestens{" "}
            <strong>265.000 Menschen müssen am 12.10. mit JA abstimmen</strong>,
            damit Hamburg ein besseres Klimaschutzgesetz bekommt. Das können wir
            schaffen, aber nur gemeinsam!
          </p>

          <p>
            Egal wie alt oder jung du bist, wo du wohnst und ob du schon mal
            politisch aktiv warst.{" "}
            <strong>
              Egal ob du zehn Minuten zwischendurch oder volle Tage am
              Wochenende einbringen
            </strong>{" "}
            kannst - wir brauchen jede helfende Hand!
          </p>
        </div>
      </Block>
      <Block variant="blue">
        <h2 className="h2 max-w-xl text-center">
          Du hast Lust beim Zukunftsentscheid einzusteigen?
        </h2>

        <IconGrid>
          <GridIcon
            blobId={66}
            className="h-full"
            src="/icons/check.svg"
            title="1. Komm zum Infotreffen"
          >
            <div className="flex grow flex-col items-center justify-between gap-10">
              Jeden Mittwoch um 18:30 Uhr machen wir in der Kampstraße 15 eine
              Einführung für Neue.
              <Link href="/" className="button primary">
                Melde dich an
              </Link>
            </div>
          </GridIcon>
          <GridIcon
            blobId={70}
            className="h-full"
            src="/icons/clock.svg"
            title="2. Bleib informiert"
          >
            <div className="flex grow flex-col items-center justify-between gap-10">
              Bleib über unsere Infochannel auf Telegram und Whatsapp auf dem
              aktuellen Stand.
              <div className="flex gap-3">
                <a
                  href={INFO_CHANNEL_INVITE_LINKS.Telegram}
                  target="_blank"
                  className="button secondary"
                >
                  <Image
                    src="/icons/telegram-logo.svg"
                    alt="Telegram Logo"
                    className="mr-2.5"
                    width={19}
                    height={19}
                  />
                  Telegram
                </a>
                <a
                  href={INFO_CHANNEL_INVITE_LINKS.WhatsApp}
                  target="_blank"
                  className="button secondary"
                >
                  <Image
                    src="/icons/whatsapp-logo.svg"
                    alt="WhatsApp Logo"
                    className="mr-2.5"
                    width={19}
                    height={19}
                  />
                  WhatsApp
                </a>
              </div>
            </div>
          </GridIcon>
          <GridIcon
            blobId={3}
            className="h-full"
            src="/icons/muscle.svg"
            title="3. Tritt in Aktion"
          >
            <div className="flex grow flex-col items-center justify-between gap-10">
              Nimm mit uns an Aktionen teil, wie Infostände oder
              Haustürwahlkampf.
              <Link
                href="#so-gewinnen-wir-den-entscheid"
                className="button secondary"
              >
                Unsere Aktionen
              </Link>
            </div>
          </GridIcon>
        </IconGrid>
      </Block>
      <Block variant="green">
        <BlockQuote
          author={"Moni, 65, Rentnerin"}
          quote={
            "Ich bin dabei, weil ich mich wirksam fühle und mit tollen Menschen zusammen die Welt retten kann."
          }
          className="md:flex-row-reverse"
        />
      </Block>
      <Block>
        <div
          className="max-w-xl space-y-2 text-center"
          id="so-gewinnen-wir-den-entscheid"
        >
          <h2 className="h2">So gewinnen wir den Entscheid!</h2>
          <p>
            Mit diesen und vielen weiteren Aktionen, Plakatieren in der Stadt,
            einer großen Öffentlichkeitskampagne und einem breiten Bündnis
            machen wir auf uns aufmerksam!
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-18 md:grid-cols-2">
          <ThisIsHowWeWinGridItem
            title="Haustürwahlkampf"
            href="/mitmachen/abc"
            asset={
              <>
                <figure className="blob-[/blobs/5.svg]">
                  <Image
                    src={HaustuerwahlkampfImage}
                    placeholder="blur"
                    alt="Haustürwahlkampf"
                  />
                </figure>
              </>
            }
          >
            Klimaschutz betrifft uns alle im Alltag, deshalb gehen wir bis vor
            die Wohnungstüren und überzeugen!
          </ThisIsHowWeWinGridItem>
          <ThisIsHowWeWinGridItem
            title="Infostände"
            href="/mitmachen/abc"
            asset={
              <>
                <figure className="blob-[/blobs/67.svg]">
                  <Image
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                    src={InfostaendeImage}
                    placeholder="blur"
                    alt="Infostände"
                  />
                </figure>
              </>
            }
          >
            Wir sind präsent in ganz Hamburg, gesprächsbereit und haben eine
            gute Zeit bei Infoständen!
          </ThisIsHowWeWinGridItem>
          <ThisIsHowWeWinGridItem
            title="Lokale Veranstaltungen"
            href="/mitmachen/abc"
            asset={
              <>
                <figure className="blob-[/blobs/36.svg]">
                  <Image
                    src={LokaleVeranstaltungenImage}
                    placeholder="blur"
                    alt="Lokale Veranstaltungen"
                  />
                </figure>
              </>
            }
          >
            Wir sind in allen Bezirken Hamburgs unterwegs, um die ganze Stadt
            auf dem Weg zur Klimaneutralität mitzunehmen. Von Stadtteilzentren
            zu Kirchengemeinden, wir bieten zahlreiche lokale Gesprächsräume an!
          </ThisIsHowWeWinGridItem>
          <ThisIsHowWeWinGridItem
            title="Grossevents"
            href="/mitmachen/abc"
            asset={
              <>
                <figure className="blob-[/blobs/88.svg]">
                  <Image
                    src={GrosseventsImage}
                    placeholder="blur"
                    alt="Grossevents"
                  />
                </figure>
              </>
            }
          >
            Auch die größte Institutionen und Namen Hamburgs sind beim
            Zukunftsentscheid dabei! Das zeigen wir durch diverse Großevents,
            die Aufmerksamkeit für unser Vorhaben generieren.
          </ThisIsHowWeWinGridItem>
        </div>
      </Block>

      <Block variant="green">
        <BlockQuote
          author={"Maik, 45, Beamter"}
          quote={
            "Ich bin dabei, weil ich für die Zukunft meiner Kinder kämpfen will."
          }
        />
      </Block>
      <Block variant="blue" className="gap-8">
        <div className="max-w-xl space-y-4 text-center">
          <h2 className="h2">
            Unterstütze uns als ehrenamtlicher Professional
          </h2>
          <p>
            Du bist Texter*in, Graphik Designer*in oder Arter*in? Du kannst
            Social Media Management, Kommunikationsstrategie oder Event
            Management? Wir sind auf der Suche nach Professionals, die in
            unterschiedlichen Bereichen ehrenamtlich mitarbeiten.
          </p>
        </div>
        <Link href="/" className="button secondary">
          Mehr Informationen
        </Link>
      </Block>
      <Block>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="mb-8 max-w-xl space-y-4">
              <h2 className="h2">Unterstütze uns in deiner Nachbarschaft</h2>

              <p>
                Du kannst einfach unverbindlich der Telegram-Gruppe deines
                Bezirks beitreten. Dort kannst du dich mit anderen vernetzen und
                bekommst alle Infos. Falls du kein Telegram hast,{" "}
                <a
                  href="mailto:kontakt@zukunftsentscheid-hamburg.de"
                  className="underline"
                  target="_blank"
                >
                  schreib uns
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Altona}
                className="button secondary alt"
              >
                Altona
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Bergedorf}
                className="button secondary alt"
              >
                Bergedorf
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Eimsbuettel}
                className="button secondary alt"
              >
                Eimsbüttel
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Nord}
                className="button secondary alt"
              >
                Hamburg Nord
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Mitte}
                className="button secondary alt"
              >
                Hamburg Mitte
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Harburg}
                className="button secondary alt"
              >
                Harburg
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Universitaeten}
                className="button secondary alt"
              >
                Universitäten
              </Link>
              <Link
                href={DISTRICT_TELEGRAM_INVITE_LINKS.Wandsbek}
                className="button secondary alt"
              >
                Wandsbek
              </Link>
            </div>
          </div>
          <div className="mb-8 space-y-4">
            <SvgHhDistrictMapWithStylesAndLinks />
          </div>
        </div>
      </Block>
      <TwoColumnBlock
        left={{
          variant: "green",
          content: (
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="h2 mb-4">Noch Fragen</h2>
              <p className="mb-8">
                Du hast noch Fragen an uns oder möchtest uns etwas schreiben?
                Dann schicke uns gerne eine Nachricht über unser
                Kontaktformular.
              </p>
              <Link href="/kontakt" className="button secondary alt">
                Schreib uns
              </Link>
            </div>
          ),
        }}
        right={{
          variant: "rose",
          content: (
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="h2 mb-4">Du brauchst Material?</h2>
              <p className="mb-8">
                <strong>Wir sind in der Kampstraße 15 – Komm vorbei!</strong>{" "}
                Dort findest du Flyer, Flaschenöffner, Beachflags, Westen,
                Stifte und alles was du für eine erfolgreiche Aktion brauchst.{" "}
                <strong>
                  Tipp: Mittwochs um 18.30 Uhr findet hier auch das Infotreffen
                  statt
                </strong>
              </p>
              <Link href="/material" className="button secondary alt">
                Materialübersicht
              </Link>
            </div>
          ),
        }}
      />
    </>
  );
}
