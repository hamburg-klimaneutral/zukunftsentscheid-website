import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import SectionBorderDecorationBlob43LeftBottom from "@/app/_components/blob-section-decorators/43-left-bottom";
import Link from "next/link";
import SectionBorderDecorationBlob91RightCenter from "@/app/_components/blob-section-decorators/91-right-center";
import SectionBorderDecorationBlob65LeftTop from "@/app/_components/blob-section-decorators/65-left-top";

export default function EhrenamtProjektManagementPage() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>
            Projekt Management Wir suchen Projekt Manager*innen zur Koordination
            unserer Kampagne.
          </h1>
          <h2 className="h1">Projekt Management</h2>
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
            stimmen. Das erfordert die Betreuung zahlreicher Arbeitsstränge und
            Einzelprojekte, für die wir ehrenamtliche Unterstützung im Projekt
            Management benötigen. Darüber hinaus planen wir einige größere
            Events und Veranstaltungen.
          </p>
          <h2 className="h2">Zeitaufwand</h2>
          <ul className="list-disc">
            <li>Je nach Arbeitspaket</li>
            <li>Ab 3-4 Stunden pro Woche (gerne mehr)</li>
          </ul>
          <h2 className="h2">Mögliche Aufgaben</h2>
          <ul className="list-disc">
            <li>
              Koordination von crossfunktionalen Teams auf einzelnen
              Arbeitspaketen – viele davon im Schwerpunktbereich Kommunikation /
              Marketing
            </li>
            <li>
              Schaffen einer Struktur für die optimale Bearbeitung von Aufgaben
              und für die Einhaltung von Budgets und Timings
            </li>
            <li>Konzeption und Koordination von großen Events</li>
            <li>
              Den Überblick über einzelne Arbeitsbereiche behalten und einen
              Informationsfluss sicherstellen
            </li>
            <li>Ehrenamtliche aus verschiedenen Bereichen zusammenbringen</li>
          </ul>
          <p>
            <i>
              Möglich ist eine Mitarbeit an einem oder mehreren Aufgabenfeldern.
              Wir suchen aber nicht Superwoman oder Superman zur Abdeckung all
              dieser Aufgaben.
            </i>
          </p>
          <h2 className="h2">Beispiele für Arbeitspakete</h2>
          <ul className="list-disc">
            <li>Organisation von Presse-Events oder Veranstaltungen</li>
            <li>
              Koordination von Creatives bei der Erstellung von Werbematerialien
            </li>
            <li>
              Erarbeitung und Umsetzung von Sonderprojekten wie Merchandise,
              Schulprojekten oder Großinstallationen
            </li>
            <li>und vieles mehr</li>
          </ul>
          <h2 className="h2">Was wir suchen</h2>
          <ul className="list-disc">
            <li>
              Personen mit Erfahrung im Bereich Projekt Management, Brand
              Management oder Event Management
            </li>
            <li>
              Selbstbewusst im Stakeholder Management und kontaktfreudig im
              Umgang mit anderen Personen
            </li>
            <li>Interesse an Klimaschutz</li>
            <li>Strukturiertes Arbeiten</li>
          </ul>
          <h2 className="h2">Was wir bieten</h2>
          <ul className="list-disc">
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
