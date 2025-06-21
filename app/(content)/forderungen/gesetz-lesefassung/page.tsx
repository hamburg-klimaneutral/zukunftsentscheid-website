import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import ClaimsOverview from "@/app/_components/claims-overview";
import GetInvolved from "@/app/_components/getInvolved";
import Gesetzestext from "@/app/(content)/forderungen/gesetz-lesefassung/gesetzestext";
import { YearlyEmissions } from "@/app/(content)/forderungen/gesetz-lesefassung/reductions";

export default function GesetzLesefassungPage() {
  return (
    <>
      <Block variant="green" blockClassName="z-10">
        <Hero>
          <h1 className="h1 max-w-lg text-center">Gesetzestext</h1>
        </Hero>
      </Block>

      <Block>
        <div className="paragraph-gap max-w-2xl text-center">
          <p>
            Mit dem Klimaschutzverbesserungsgesetz ändern wir das Hamburgische
            Klimaschutzgesetz (HmbKliSchG). Der offizielle Text kann{" "}
            <a
              href="/documents/Klimaschutzverbesserungsgesetz-mit-Gesetzesbegruendung.pdf"
              className="underline"
              target="_blank"
            >
              als PDF eingesehen
            </a>{" "}
            werden.
          </p>
          <p>
            Um verständlicher zu machen, was genau durch die Initiative geändert
            wird, gibt es hier eine Lesefassung, in der{" "}
            <span className="addition">Einfügungen</span> und{" "}
            <span className="removal">Streichungen</span> gegenüber der am
            06.12.2023 von der Bürgerschaft beschlossenen Fassung markiert sind.
          </p>
        </div>
      </Block>
      <Block variant="blue">
        <div className="markdown text-left">
          <Gesetzestext />
        </div>
      </Block>
      <Block>
        <div className="markdown">
          <h2 className="h2 text-center">Anlage 3 (zu §4 Absatz 3)</h2>
          <p>
            Zulässige Jahres&shy;emissions&shy;gesamt&shy;mengen für die Jahre
            bis 2040
          </p>
          <table className="table-fixed" cellPadding={50}>
            <thead>
              <tr>
                <td width="10%" align="right" className="border"></td>
                <td width="50%" align="right" className="border p-2 font-bold">
                  Jahres&shy;emissions&shy;menge <br />
                  in Tausend Tonnen CO2
                </td>
                <td width="40%" className="border p-2 font-bold">
                  Reduktion (nachrichtlich)
                </td>
              </tr>
            </thead>
            <tbody>
              {YearlyEmissions.map(({ year, emissions, percentage }) => (
                <tr key={year}>
                  <td className="border p-2" align="right">
                    {year}
                  </td>
                  <td className="border p-2" align="right">
                    {emissions}
                  </td>
                  <td className="border p-2">{percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block variant="blue">
        <h2 className="h2">Unsere Forderungen</h2>
        <ClaimsOverview />
      </Block>

      <Block variant="green">
        <GetInvolved />
      </Block>
    </>
  );
}
