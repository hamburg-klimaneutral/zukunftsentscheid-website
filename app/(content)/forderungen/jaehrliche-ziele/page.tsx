import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import ClaimsOverview from "@/app/_components/claims-overview";
import GetInvolvedBlock from "@/app/_components/getInvolvedBlock";
import InfoBox from "@/app/_components/info-box";
import KalenderEmissionsermittlungBundesweit from "@/app/_svg/kalender-emissionsermittlung-bundesweit";
import KalenderEmissionsermittlungHamburg from "@/app/_svg/kalender-emissionsermittlung-hamburg";
import SvgDigrammJahresemissionenHamburgerZukunftsentscheid from "@/app/_svg/digramm-jahresemissionen-hamburger-zukunftsentscheid";
import SvgDiagrammJahresemissionenKlimaschutzgesetz from "@/app/_svg/diagramm-jahresemissionen-klimaschutzgesetz";
import SvgDiagrammJahresemissionenHamburgerZukunftsentscheidVergleichSzenario from "@/app/_svg/diagramm-jahresemissionen-hamburger-zukunftsentscheid-vergleich-szenario";
import Chip from "@/app/_components/chip";

export default function JaehrlicheZielePage() {
  return (
    <>
      <Block variant="green">
        <Hero>
          <h1>Jährliche Ziele</h1>
          <h2 className="h1">Damit wir wissen, wo wir stehen</h2>
        </Hero>
      </Block>
      <Block>
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:justify-between lg:gap-12">
          <div className="max-w-md space-y-2">
            <p className="text-tiny">Stand jetzt</p>
            <h2 className="h2">Hamburger Klimaschutzgesetz</h2>
            <p>
              Bis zur Klimaneutralität ist im aktuellen Klimaschutzgesetz nur
              das Zwischenziel 2030 (70 % CO2 Reduktion) genannt - wobei{" "}
              <strong>
                der Klimabeirat warnt, dass das Ziel kaum noch zu erreichen ist,
                wenn nicht effektiv Klimaschutzmaßnahmen betrieben werden.
              </strong>
            </p>
            <div className="mt-8">
              <InfoBox iconSrc="/icons/thumbs-down.svg">
                <p>
                  Derart <strong>vage Planung</strong> schafft keine politische
                  Verbindlichkeit, keine Nachvollziehbarkeit und auch keine
                  Sicherheit für dringend nötige wirtschaftliche Investitionen.
                </p>
              </InfoBox>
            </div>
          </div>
          <div className="w-full max-w-md">
            <SvgDiagrammJahresemissionenKlimaschutzgesetz
              viewBox={"0 0 602 341"}
              width={"100%"}
              height={"auto"}
            />
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-tiny">Hamburger Zukunftsentscheid</p>
            <h2 className="h2">Mit Unserem Klimagesetz</h2>
            <p>
              Deshalb schreiben wir{" "}
              <strong>jährliche Zwischenziele in Form von CO2 Budgets</strong>{" "}
              fest. Durch die Budgets, die vorgeben, wie viel die Stadt jeweils
              in den Jahren 2026 bis 2040 emittieren darf, können wir{" "}
              <strong>
                die Einhaltung der Klimazielen zuverlässig und planbar gestalten
              </strong>
              .
            </p>
            <div className="mt-8">
              <InfoBox iconSrc="/icons/thumbs-up.svg">
                <p>
                  So begrenzen wir Hamburgs Beitrag zur Klimakrise, indem wir
                  <strong>
                    ehrlich die Emissionen benennen und bewusst reduzieren
                  </strong>
                  . Wir machen die Transformation planbarer für Stadt,
                  Wirtschaft und Bürgerinnen und Bürger und schaffen Ziele,
                  deren Erreichung{" "}
                  <strong>auf jährlicher Basis überprüft</strong> wird.
                </p>
              </InfoBox>
            </div>
          </div>
          <div className="w-full max-w-md">
            <SvgDigrammJahresemissionenHamburgerZukunftsentscheid
              viewBox={"0 0 602 341"}
              width={"100%"}
              height={"auto"}
            />
          </div>
        </div>
      </Block>
      <Block variant="green">
        <div className="max-w-md text-center">
          <h2 className="text-tiny mb-2">Ambitioniert aber realistisch</h2>
          <h3 className="h2">
            Wie haben wir die jährlichen CO2 Budgets bestimmt?
          </h3>
        </div>
        <div>
          <SvgDiagrammJahresemissionenHamburgerZukunftsentscheidVergleichSzenario
            className="max-w-full"
            viewBox={"0 0 602 371"}
            height={"auto"}
          />
        </div>
        <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:justify-between md:gap-12">
          <div className="max-w-md space-y-4">
            <Chip indicatorVariant="pink" label="Szenario B" className="mb-6" />
            <p>
              <strong>Unsere Grundlage</strong>, die im Auftrag der Behörde für
              Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA) entwickelt
              wurde und{" "}
              <strong>auf dem auch die Klimaziele der Stadt beruhen</strong>.
            </p>
            <p>
              In dem Szenario wurden Sektor- und Gesamtziele für 2024 bis 2030,
              2035, 2040 und 2045 entwickelt. Von diesen wurden durch den Senat
              lediglich die Ziele für 2030 und 2045 ins Gesetz übernommen. Das
              Ziel von 69% für 2030 wurde dabei durch den Senat auf 70%
              aufgerundet.
            </p>
          </div>
          <div className="max-w-md space-y-4">
            <Chip
              indicatorVariant="blueLight"
              label="Hamburger Zukunftsentscheid"
              className="mb-6"
            />
            <p>
              Der Hamburger Zukunftsentscheid{" "}
              <strong>
                übernimmt für die Jahre bis 2030 die Zahlen der Studie
              </strong>
              . Für die Jahre ab 2030 hingegen werden die Emissionsbudgets
              stufenweise reduziert, um das Ziel der Klimaneutralität bis 2040
              zu erreichen und Hamburg auf einen ambitionierten, aber
              realistischen Weg zu bringen.
            </p>
            <p>
              Der Emissionspfad ist linear und verleiht der Politik{" "}
              <strong>
                große Flexibilität durch die Anrechnung von Über- und
                Unterschreitungen der Ziele auf die Folgejahre
              </strong>
              .
            </p>
          </div>
        </div>
      </Block>

      <Block variant="blue">
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:justify-between md:gap-12">
          <div className="max-w-md space-y-2">
            <p className="text-tiny">Dauer der Emissionsermittlung</p>
            <h2 className="h2">
              Kurs halten können wir nur, wenn wir wissen, wo wir stehen
            </h2>
            <p>
              Derzeit dauert es 15 bis 18 Monate, bis die Hamburger Emissionen
              eines Jahres ermittelt wurden. Das passiert in der sogenannten
              Verursacherbilanz. Gleichzeitig werden die bundesweiten Emissionen
              nach nur 3,5 Monaten veröffentlicht!
            </p>
            <div className="mt-8">
              <InfoBox iconSrc="/icons/handshake.svg" variant="blue">
                <p>
                  Mit anderthalb Jahren Verzögerung ist es unmöglich, Kurs zu
                  halten und Korrekturen vorzunehmen.{" "}
                  <strong>
                    Deshalb verpflichten wir die Stadt dazu, nach 6 Monaten eine
                    Schätzbilanz zu veröffentlichen.
                  </strong>
                </p>
              </InfoBox>
            </div>
          </div>
          <div className="max-w-md space-y-10">
            <div>
              <p className="text-tiny mb-4">Hamburg (15-18 Monate)</p>
              <KalenderEmissionsermittlungHamburg />
            </div>
            <div>
              <p className="text-tiny mb-4">Bundesweit (3,5 Monate)</p>
              <KalenderEmissionsermittlungBundesweit />
            </div>
          </div>
        </div>
      </Block>

      <Block>
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:justify-between md:gap-12">
          <div className="max-w-md space-y-2">
            <p className="text-tiny">
              Wenn wir das jährliche Ziel nicht schaffen
            </p>
            <h2 className="h2">Bei Zielverfehlung legen wir sofort nach!</h2>
            <p>
              Um zurück auf Kurs zu kommen verpflichten wir den Senat,{" "}
              <strong>
                innerhalb von 5 Monaten ein Sofortprogramm zum Ausgleich von zu
                viel ausgestoßenen CO2 zu beschließen
              </strong>
              . So garantieren wir, dass Hamburg seinen Verpflichtungen im Kampf
              gegen den Klimawandel nachkommt.
            </p>
          </div>
          <div className="max-w-md">
            <InfoBox iconSrc="/icons/landmark.svg">
              <p>
                Hamburg ist in der Zielerreichung auch{" "}
                <strong>auf die Bundespolitik angewiesen</strong> und muss
                natürlich nur so viel CO2 ausgleichen, wie als Stadtstaat zu
                schaffen ist.
              </p>
            </InfoBox>
          </div>
        </div>
      </Block>

      <Block variant="blue">
        <h2 className="h2">Unsere Forderungen</h2>
        <ClaimsOverview activeSlug="jaehrliche-ziele" />
      </Block>

      <GetInvolvedBlock variant="green" />
    </>
  );
}
