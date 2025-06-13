import Link from "next/link";
import Image from "next/image";

import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import Blob from "@/app/_components/blob";
import IconGrid, { GridIcon } from "@/app/_components/icon-grid";
import ClaimsOverview from "@/app/_components/claims-overview";

export default function Claim2024Page() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>Klimaneutralität 2040</h1>
          <h2 className="h1">2045 ist zu spät!</h2>
        </Hero>
      </Block>

      <Block className="max-w-2xl text-center">
        <Blob
          id={84}
          size={416}
          className="fill-pink-light absolute -top-[70%] left-[87%] -z-1 rotate-[150deg]"
        />
        <div className="absolute -top-[50%] left-[83%] flex h-[111px] w-[111px] justify-center">
          <Blob
            id={70}
            size={111}
            className="absolute top-0 left-0 rotate-[137deg] fill-white"
          />
          <Image
            width={53}
            height={53}
            className="relative"
            src="/icons/muscle.svg"
            alt=""
            aria-hidden
          />
        </div>
        <h2 className="h2">
          Hamburg muss Verantwortung übernehmen - und davon profitieren wir
          alle!
        </h2>
        <p>
          Denn mit einer vorgezogenen Klimaneutralität stellen wir unsere
          Wirtschaft für die Zukunft auf und bleiben ein attraktiver
          Wirtschaftsstandort, in dem Unternehmen zukunftssichere Jobs schaffen
          können. Deshalb haben sich auch wichtige Wirtschaftsakteure das Ziel
          gesetzt, 2040 klimaneutral zu sein.
        </p>
      </Block>

      <Block variant="green" className="gap-14">
        <div className="text-center">
          <h2 className="text-tiny mb-2">Gründe für 2040</h2>
          <h3 className="h2">2040 ist möglich und nötig</h3>
        </div>

        <IconGrid>
          <GridIcon
            blobId={35}
            src="/icons/landmark.svg"
            title="Auch die Handelskammer unterstützt 2040"
            className="fill-pink-light"
          >
            “Klimaneutralität und internationale Wettbewerbsfähigkeit bedingen
            einander”. Damit unsere Stadt wettbewerbsfähig bleibt, muss “Hamburg
            internationaler Vorreiter in Sachen Klimaschutz” werden.  Denn
            aktiver Klimaschutz ist, wie die Handelskammer betont, ein
            Standortvorteil und stärkt so die Wirtschaft.
          </GridIcon>
          <GridIcon
            blobId={2}
            src="/icons/radio-tower.svg"
            title="Mit Hamburg eine Signalwirkung bewirken"
            className="fill-pink-light"
          >
            Hamburg ist eine der größten und wirtschaftlich stärksten Städte
            Deutschlands. Eine Vorreiterrolle kann bundesweit wie international
            positive Signalwirkung entfalten. Denn global betrachtet werden ⅔
            aller Emissionen von Städten ausgestoßen. Je größer der Rückhalt in
            der Gesellschaft ist, desto mehr Bewegung kann entstehen.
          </GridIcon>
          <GridIcon
            blobId={34}
            src="/icons/briefcase.svg"
            title="Innovationen fördern & Arbeitsplätze sichern"
            className="fill-pink-light"
          >
            Frühzeitige Investitionen in erneuerbare Energien, Energieeffizienz,
            Gebäudesanierung, nachhaltige Mobilität und Kreislaufwirtschaft
            fördern Innovation und schaffen zukunftssichere Arbeitsplätze in
            Handwerk, Industrie, Forschung und Dienstleistung. Klimaschutz
            sichert nicht nur bestehende Jobs, sondern schafft neue Perspektiven
          </GridIcon>
          <GridIcon
            blobId={5}
            src="/icons/piggy.svg"
            title="Schlau & Früh sparen"
            className="fill-pink-light"
          >
            Spätere Maßnahmen sind oft teurer. Frühzeitige Investitionen in
            Klimaschutzmaßnahmen verhindern hohe Folgekosten durch den
            Klimawandel und Fehlinvestitionen in fossile Infrastruktur.
          </GridIcon>
          <GridIcon
            blobId={3}
            src="/icons/ship.svg"
            title="Im Norden sind wir realistisch"
            className="fill-pink-light"
          >
            Dabei ist Hamburg natürlich darauf angewiesen, dass auf
            bundesdeutscher und europäischer Ebene die Umsetzung der
            Transformation hin zur Klimaneutralität mit hoher Priorität
            betrieben wird. Dies betrifft insbesondere den Ausbau erneuerbarer
            Energien. Ein klimaneutrales Hamburg 2040 setzt voraus, dass die
            Stromversorgung 2040 vollständig aus klimaneutralen Quellen
            erfolgt.  Allgemein ist Hamburg nur für Aspekte zuständig, die die
            Hansestadt auch umsetzen kann. Bei Widersprüchen soll sich Hamburg
            auch auf Bundesebene verstärkt für Klimaschutz einsetzen. 
          </GridIcon>
          <GridIcon
            blobId={66}
            src="/icons/history.svg"
            title="Damit wir nicht das Schlusslicht im Norden sind"
            className="fill-pink-light"
          >
            Bremen, Niedersachsen, Schleswig-Holstein und Mecklenburg-Vorpommern
            wollen alle bis 2040 klimaneutral sein. Rheinland-Pfalz und
            Baden-Württemberg übrigens auch.
          </GridIcon>
        </IconGrid>
      </Block>

      <Block variant="blue">
        <h2 className="h2">Unsere Forderungen</h2>
        <ClaimsOverview activeSlug="2040-klimaneutral" />
      </Block>

      <Block variant="green" className="max-w-xl text-center">
        <h2 className="h2">
          Den Entscheid gewinnen wir nur gemeinsam:{"\n"}
          Sei dabei!
        </h2>
        <p>
          Komm zu einem unserer Infotreffen - jeden Mittwoch um 18:30 Uhr in der
          Kampstraße 15. Oder oder unterstütze uns bei Aktionen!
        </p>
        <Link href="/mitmachen" className="button primary">
          Mitmachen
        </Link>
      </Block>
    </main>
  );
}
