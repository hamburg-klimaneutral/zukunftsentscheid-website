import Hero from "@/app/_components/hero";
import Block from "@/app/_components/block";
import ClaimsOverview from "@/app/_components/claims-overview";
import GetInvolvedBlock from "@/app/_components/getInvolvedBlock";
import InfoBox from "@/app/_components/info-box";
import ForderungenSubpageHeaderBlob from "@/app/(content)/forderungen/headerBlob";
import Image from "next/image";
import GuenstigerOepnv from "@/app/_pictures/guenstiger-oepnv.png";
import SonneFuerAlle from "@/app/_pictures/sonne-fuer-alle.png";
import SauberesHeizen from "@/app/_pictures/sauberes-heizen.png";
import ImageBlob36Alt from "@/app/_components/blob-images/36-alt";
import ImageBlob88Rotated from "@/app/_components/blob-images/88-rotated";
import ImageBlob68Rotated from "@/app/_components/blob-images/68-rotated";

export default function SozialvertraeglichkeitPage() {
  return (
    <main>
      <Block variant="green" blockClassName="z-10">
        <Hero>
          <h1>Sozialverträglichkeit</h1>
          <h2 className="h1 max-w-lg text-center">
            Nachhaltiger Klimaschutz geht nur sozial!
          </h2>
        </Hero>

        <ForderungenSubpageHeaderBlob iconSrc="/icons/check.svg" />
      </Block>
      <Block className="gap-24">
        <div className="max-w-xl space-y-2 text-center">
          <h2 className="h2">Klima und Soziales gehen Hand in Hand!</h2>
          <p>
            Deshalb schreiben wir mit dem Zukunftsentscheid die verbindliche
            Sozialverträglichkeit von Klimaschutzmaßnahmen ins Gesetz. Damit
            dient jede Maßnahme nicht nur dem Klima, sondern stärkt auch unser
            Miteinander. Wenn Maßnahmen gut geplant und ausreichend finanziert
            sind, fördert Klimaschutz aktiv soziale Belange.
          </p>
        </div>
        <div className="content-grid">
          <ImageBlob68Rotated
            className="max-w-md"
            firstBlobClassName={"fill-pink-light"}
            secondBlobClassName={"fill-pink-dark"}
          >
            <Image
              src={GuenstigerOepnv}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Symbolbild: Die U3 an den Landungsbrücken"
            />
          </ImageBlob68Rotated>
          <div>
            <p className="text-tiny mb-2">Beispiel 1</p>
            <h2 className="h2 mb-4">Günstige Öffis</h2>
            <p>
              Das Deutschlandticket hat den öffentlichen Nah- und
              Regionalverkehr für viele Menschen bezahlbarer gemacht und so
              bundesweit 560 Millionen Autofahrten und 2,3 Millionen Tonnen CO²
              eingespart. Hamburg kann durch Förderungen auf Landesebene
              sicherstellen, dass das Ticket für alle erschwinglich ist.
            </p>
          </div>
          <ImageBlob88Rotated
            className="max-w-md"
            firstBlobClassName={"fill-green-dark"}
            secondBlobClassName={"fill-pink-light"}
          >
            <Image
              src={SonneFuerAlle}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Symbolbild: Verlegen von Solarmodulen"
            />
          </ImageBlob88Rotated>
          <div>
            <p className="text-tiny mb-2">Beispiel 2</p>
            <h2 className="h2 mb-4">Sonne für alle!</h2>
            <p>
              Solaranlagen auf dem Dach senken unsere Stromkosten - und über
              Mieterstrommodelle profitieren davon gerade Haushalte mit geringem
              und mittlerem Einkommen. Mit einem gezielten Förderprogramm und
              einer zentralen Beratungsstelle ist der Weg zur PV-Anlage nicht
              nur bezahlbar, sondern auch bequem. So hat z.B. das Land NRW seit
              2023 rund zehn Millionen Euro für Mieterstrommodelle zur Verfügung
              gestellt. Darüberhinaus kann Hamburg durch die flächendeckende
              Bestückung von öffentlichen Gebäuden und Schulen als Vorbild
              vorangehen, einen großen Beitrag leisten und so die Bürger*innen
              entlasten.
            </p>
          </div>
          <ImageBlob36Alt
            className="max-w-md"
            firstBlobClassName={"fill-blue-light"}
            secondBlobClassName={"fill-green-neon"}
          >
            <Image
              src={SauberesHeizen}
              sizes="(min-width: 640px) 530px, 100vw"
              placeholder="blur"
              alt="Symbolbild: Sanierung eines Fensterrahmens."
            />
          </ImageBlob36Alt>
          <div>
            <p className="text-tiny mb-2">Beispiel 3</p>
            <h2 className="h2 mb-4">Sauberes Heizen</h2>
            <p>
              Gebäudesanierung ist Mieterschutz, denn in sanierten Wohnungen
              leben wir günstiger und besser. Nachbarschaftliche Wärmelösungen
              und gezielte Programme für sozial benachteiligte Quartiere sorgen
              dafür, dass alle Menschen von den Sanierungen und den damit
              verbundenen niedrigeren Wohnkosten profitieren..
            </p>
          </div>
        </div>
      </Block>
      <Block variant="green">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:justify-between md:gap-12">
          <div className="max-w-md space-y-2">
            <h2 className="h2">In Hamburg halten wir zusammen.</h2>
            <p>
              Die verpflichtende Sozialverträglichkeit stellt sicher, dass es
              auf dem Weg dorthin <strong>für alle bezahlbar bleibt</strong>.
              Denn sie legt fest, dass die Politik bei jeder Klimaschutzmaßnahme
              die sozialen Auswirkungen berücksichtigen muss.
            </p>
          </div>
          <div className="max-w-md">
            <InfoBox iconSrc="/icons/handshake-white.svg" variant="green">
              <p>
                Zeigt sich, dass durch eine Maßnahme erhöhte Kosten für
                Haushalte mit niedrigem oder mittlerem Einkommen entstehen,{" "}
                <strong>
                  muss die Politik tätig werden und für einen Ausgleich sorgen
                </strong>
                . Je nach Maßnahme können das z.B. Beratungen, Übergangsregeln
                oder zusätzliche Finanzierungsangebote sein.
              </p>
            </InfoBox>
          </div>
        </div>
      </Block>
      <Block variant="blue">
        <h2 className="h2">Unsere Forderungen</h2>
        <ClaimsOverview activeSlug="sozialvertraeglichkeit" />
      </Block>

      <GetInvolvedBlock variant="green" />
    </main>
  );
}
