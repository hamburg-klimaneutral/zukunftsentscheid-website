import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import General from "./items/general.mdx";
import { FAQ } from "./components";

export default function FragenUndAntwortenPage() {
  return (
    <>
      <Block variant="blue">
        <Hero>
          <h1 className="h1">Fragen und Antworten</h1>
        </Hero>
      </Block>
      <Block>
        <p>
          Du hast Fragen zum Hamburger Zukunftsentscheid? Wir haben Antworten!
        </p>
      </Block>
      <Block variant="blue" className="gap-15">
        <FAQ.Section title="Allgemeines">
          <General />
        </FAQ.Section>
        <FAQ.Section title="Weiteres">
          <General />
        </FAQ.Section>
      </Block>
    </>
  );
}
