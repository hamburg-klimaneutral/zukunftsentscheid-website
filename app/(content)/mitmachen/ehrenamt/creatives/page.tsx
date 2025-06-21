import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import SectionBorderDecorationBlob43LeftBottom from "@/app/_components/blob-section-decorators/43-left-bottom";
import Link from "next/link";
import SectionBorderDecorationBlob91RightCenter from "@/app/_components/blob-section-decorators/91-right-center";
import SectionBorderDecorationBlob65LeftTop from "@/app/_components/blob-section-decorators/65-left-top";

export default function AblaufPage() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>
            Wir suchen Creatives zur ehrenamtlichen Gestaltung unseres
            öffentlichen Auftritts.
          </h1>
          <h2 className="h1">Creative</h2>
        </Hero>
      </Block>
      <Block className="gap-24">
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <div className="max-w-xl space-y-4">
          <SectionBorderDecorationBlob65LeftTop
            firstBlobClassName="fill-pink-light"
            secondBlobClassName="fill-green-neon"
          />
          <p>
            Wir haben einen direkt wirksamen Weg gefunden, den Klimaschutz in
            Hamburg verbindlicher zu gestalten. Doch dafür müssen wir 265.000
            Hamburger*innen davon überzeugen, beim Volksentscheid mit JA zu
            stimmen. Das erfordert eine riesige Kommunikationskampagne, für die
            wir ehrenamtliche Unterstützung suchen!
          </p>
          <h2 className="h2">Zeitaufwand</h2>
          <ul>
            <li>Je nach Arbeitspaket</li>
            <li>Ab 3-4 Stunden pro Woche (gerne mehr)</li>
            <li>
              Möglich ist auch die Übernahme zeitlich begrenzter Arbeitspakete
              (3-4 Wochen)
            </li>
          </ul>
          <h2 className="h2">Mögliche Aufgaben</h2>
          <ul>
            <li>
              Konzeption von öffentlichem Auftritt: Entwicklung von kreativen
              Kernideen, Headlines, CI-Gestaltung
            </li>
            <li>
              Gestaltung von Designs: Flyer, OOH, Plakate, Social Media
              Postings, Merch, u.v.m.
            </li>
            <li>
              Verfassen von Texten: schlagkräftige Headlines, Flyer-Texte,
              Social Media und Website Copys, Newsletter, etc.
            </li>
            <li>Erstellung & Produktion von Story Boards für Image Videos</li>
            <li>Entwicklung von kreativen Events & Aktionsideen</li>
            <li>Fotographie & Videographie</li>
          </ul>
          <p>
            <i>
              Möglich ist eine Mitarbeit an einem oder mehreren Aufgabenfeldern.
              Wir suchen aber nicht Superwoman oder Superman zur Abdeckung all
              dieser Aufgaben.
            </i>
          </p>
          <h2 className="h2">Was wir suchen</h2>
          <ul>
            <li>
              Creatives mit erster Berufserfahrung in einem der Bereiche Text,
              Design, Art Konzeption, Foto/Film
            </li>
            <li>
              Fähigkeit, Inhalte verständlich und zielgruppengerecht
              aufzubereiten
            </li>
            <li>Interesse an Klimaschutz</li>
            <li>Eigenständiges Arbeiten</li>
            <li>Standort Hamburg ist nicht notwendig</li>
          </ul>
          <h2 className="h2">Was wir bieten</h2>
          <ul>
            <li>
              Die Möglichkeit, eigene Fähigkeiten selbstwirksam für mehr
              Klimaschutz in Hamburg einzusetzen
            </li>
            <li>Zusammenarbeit mit einem engagierten und motivierten Team</li>
            <li>Flexibles Arbeiten mit viel Raum für eigene Ideen</li>
            <li>Eine ausführliche Einarbeitung</li>
            <li>Bei Bedarf Ehrenamts-Bestätigungen o.ä.</li>
          </ul>
        </div>
        <SectionBorderDecorationBlob91RightCenter
          firstBlobClassName="fill-pink-light"
          secondBlobClassName="fill-green-neon"
        />
      </Block>
      <Block variant="pinkLight">
        <SectionBorderDecorationBlob43LeftBottom
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-green-neon"
        />
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="h2 underline-4">Kontaktiere uns!</h2>
          <p>
            Wir freuen uns, wenn du mit deinen Fähigkeiten dabei unterstützt,
            ein besseres Klimaschutzgesetz für Hamburg möglich zu machen. Melde
            dich gerne formlos und so zeitnah wie möglich bei uns. Auch bei
            Rückfragen oder wenn du noch unsicher bist, ob wir zu dir passen!
          </p>
          <Link
            className="underline"
            href={"mailto:ehrenamt@zukunftsentscheid-hamburg.de"}
          >
            ehrenamt@zukunftsentscheid-hamburg.de
          </Link>
          <p>
            <b>Gemeinsam schreiben wir die Zukunft von Hamburg neu!</b>
          </p>
        </div>
      </Block>
    </main>
  );
}
