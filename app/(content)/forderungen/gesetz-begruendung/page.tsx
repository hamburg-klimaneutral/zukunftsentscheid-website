import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import ClaimsOverview from "@/app/_components/claims-overview";
import GetInvolved from "@/app/_components/getInvolved";
import Begruendung from "./gesetzesbegruendung.mdx";

export default function GesetzLesefassungPage() {
  return (
    <>
      <Block variant="green" blockClassName="z-10">
        <Hero>
          <h1 className="h1 max-w-lg text-center">Gesetzesbegründung</h1>
        </Hero>
      </Block>

      <Block>
        <div className="markdown">
          <Begruendung />

          <h2 className="text-center">
            II.
            <br />
            Besonderer Teil
          </h2>

          <p>
            Im besonderen Teil der Gesetzesbegründung werden die Paragraphen
            einzeln begründet. Er kann{" "}
            <a
              href="/documents/Klimaschutzverbesserungsgesetz-mit-Gesetzesbegruendung.pdf"
              className="underline"
              target="_blank"
            >
              als PDF heruntergeladen und eingesehen
            </a>{" "}
            werden.
          </p>
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
