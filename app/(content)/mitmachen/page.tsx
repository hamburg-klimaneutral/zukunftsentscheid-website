import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import IconGrid, { GridIcon } from "@/app/_components/icon-grid";
import Link from "next/link";
import TwoColumnBlock from "@/app/_components/two-column-block";

export default function ForderungenPage() {
  return (
    <>
      <Block variant="green">
        <Hero asset={<></>}>
          <h1>Mitmachen</h1>
          <h2 className="h1">
            Endlich sozialer Klimaschutz. Du machst den Unterschied!
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
                <Link href="/" className="button secondary">
                  Telegram
                </Link>
                <Link href="/" className="button secondary">
                  WhatsApp
                </Link>
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
              Haustürwahlkampf
              <Link href="/" className="button secondary">
                Unsere Aktionen
              </Link>
            </div>
          </GridIcon>
        </IconGrid>
      </Block>
      <Block variant="green">TODO Zitat</Block>
      <Block>
        <div className="max-w-xl space-y-2 text-center">
          <h2 className="h2">So gewinnen wir den Entscheid!</h2>
          <p>
            Mit diesen und vielen weiteren Aktionen, Plakatieren in der Stadt,
            einer großen Öffentlichkeitskampagne und einem breiten Bündnis
            machen wir auf uns aufmerksam!
          </p>
        </div>
        <div>TODO Images</div>
      </Block>
      <Block variant="green">TODO Zitat</Block>
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
              <Link href="/" className="button secondary alt">
                Altona
              </Link>
              <Link href="/" className="button secondary alt">
                Bergedorf
              </Link>
              <Link href="/" className="button secondary alt">
                Eimsbüttel
              </Link>
              <Link href="/" className="button secondary alt">
                Hamburg Nord
              </Link>
              <Link href="/" className="button secondary alt">
                Hamburg Mitte
              </Link>
              <Link href="/" className="button secondary alt">
                Harburg
              </Link>
              <Link href="/" className="button secondary alt">
                Universitäten
              </Link>
              <Link href="/" className="button secondary alt">
                Wandsbek
              </Link>
            </div>
          </div>
          <div className="mb-8 space-y-4">TODO Karte</div>
        </div>
      </Block>
      <TwoColumnBlock
        left={{
          variant: "green",
          content: (
            <div className="flex flex-col items-center px-10 text-center">
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
            <div className="flex flex-col items-center px-10 text-center">
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
