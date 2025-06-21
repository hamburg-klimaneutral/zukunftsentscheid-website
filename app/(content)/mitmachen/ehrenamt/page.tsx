import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import SectionBorderDecorationBlob43LeftBottom from "@/app/_components/blob-section-decorators/43-left-bottom";
import Link from "next/link";
import IconGrid, { GridIcon } from "@/app/_components/icon-grid";

export default function AblaufPage() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>Endlich verbindlicher Klimaschutz.</h1>
          <h2 className="h1">Nimm es selbst in die Hand.</h2>
        </Hero>
      </Block>
      <Block className="gap-24">
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <div className="max-w-xl space-y-4">
          <p>
            Mit unserem Volksentscheid nehmen wir verbindlichen Klimaschutz für
            Hamburg endlich selbst in die Hand. Uns fehlt nur noch ein letzter
            Schritt – bei unserem Volksentscheid mindestens 265.000
            Hamburger*innen von uns überzeugen.
          </p>
          <p>
            Genau hier kannst <b>DU</b> den Unterschied machen. Du bist
            Texter*in, Arter*in oder Graphik Designer*in? Du bist Social Media
            Manager*in, Marketeer oder Kommunikations-Stratege? Und du möchtest
            deine Fähigkeiten endlich für etwas einsetzen, was sich nicht nur
            richtig gut anfühlt, sondern auch direkt wirksam ist?
          </p>
          <p>
            Komm zu uns ins Team, es gibt mit Sicherheit das Richtige für dich!
          </p>
        </div>
      </Block>
      <Block variant="pinkLight">
        <SectionBorderDecorationBlob43LeftBottom
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-green-neon"
        />
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="h2 underline-4">Kontaktiere uns!</h2>
          <p className="max-w-md">
            Hast du Fragen zum Engagement beim Hamburger Zukunftsentscheid?
            Schreib‘ uns einfach eine Mail an{" "}
            <Link
              className="underline"
              href="mailto:ehrenamt@zukunftsentscheid-hamburg.de"
            >
              ehrenamt@zukunftsentscheid-hamburg.de
            </Link>
            .
          </p>
          <Link
            className="button primary mt-4"
            href="mailto:ehrenamt@zukunftsentscheid-hamburg.de"
          >
            E-Mail senden!
          </Link>
        </div>
      </Block>
      <Block>
        <IconGrid>
          <GridIcon
            blobId={5}
            src="/icons/heart-hand.svg"
            title="CREATIVE"
            className="fill-pink-light"
          >
            Du bist Texter*in, Graphik Designer*in, Art Director, … ? Entwickle
            gemeinsam mit uns Claims, Designs, Graphiken, Texte und kreative
            Leitideen.
            <Link
              className="button primary mt-4"
              href="/mitmachen/ehrenamt/creatives"
            >
              Mehr erfahren
            </Link>
          </GridIcon>
          <GridIcon
            blobId={2}
            src="/icons/thumbs-up.svg"
            title="SOCIAL MEDIA"
            className="fill-pink-light"
          >
            Du hast Erfahrung im Bereich Social Media Management, Digital
            Strategie oder Media Planung? Mach mit deinen Fähigkeiten den
            Volksentscheid bekannt.
            <Link
              className="button primary mt-4"
              href="/mitmachen/ehrenamt/social-media"
            >
              Mehr erfahren
            </Link>
          </GridIcon>
          <GridIcon
            blobId={40}
            src="/icons/hamburg.svg"
            title="Projekt Management"
            className="fill-pink-light"
          >
            Du hast Erfahrungen im Durchsteuern von großen Projekte, bist gut im
            Stakeholder Management oder im Marketing tätig? Mache mit deiner
            Struktur und deinem Durchblick den Unterschied.
            <Link
              className="button primary mt-4"
              href="/mitmachen/ehrenamt/projekt-management"
            >
              Mehr erfahren
            </Link>
          </GridIcon>
        </IconGrid>
        <h2 className="h2">
          Melde dich unverbindlich mit deinen Fähigkeiten bei uns und werde
          Zukunftsentscheider*in!
        </h2>
        {/* @TODO: add contact form */}
        <p>KONTAKTFORMULAR</p>
      </Block>
    </main>
  );
}
