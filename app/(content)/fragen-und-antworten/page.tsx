import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import ExampleOne from "./items/exampleOne.mdx";
import ExampleTwo from "./items/exampleTwo.mdx";
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
      <FAQ.Root>
        <Block variant="blue" className="gap-15">
          <FAQ.Section title="Beispiel 1">
            <ExampleOne />
          </FAQ.Section>
          <FAQ.Section title="Beispiel 2">
            <ExampleTwo />
          </FAQ.Section>
        </Block>
      </FAQ.Root>
    </>
  );
}
