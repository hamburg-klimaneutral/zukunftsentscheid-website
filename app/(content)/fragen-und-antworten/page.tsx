import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import ExampleOne from "./items/exampleOne.mdx";
import ExampleTwo from "./items/exampleTwo.mdx";
import { FAQ } from "./components";
import SectionBorderDecorationBlob65LeftTop from "@/app/_components/blob-section-decorators/65-left-top";
import SectionBorderDecorationBlob91RightCenter from "@/app/_components/blob-section-decorators/91-right-center";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import GetInvolved from "@/app/_components/getInvolved";
import SectionBorderDecorationBlob43LeftTop from "@/app/_components/blob-section-decorators/43-left-top";

export default function FragenUndAntwortenPage() {
  return (
    <>
      <Block variant="green">
        <Hero>
          <h1 className="h1">Fragen und Antworten</h1>
        </Hero>
      </Block>
      <Block>
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <p>
          Du hast Fragen zum Hamburger Zukunftsentscheid? Wir haben Antworten!
        </p>
      </Block>
      <FAQ.Root>
        <Block variant="blue" className="gap-15">
          <SectionBorderDecorationBlob65LeftTop
            firstBlobClassName="fill-green-dark"
            secondBlobClassName="fill-green-neon"
          />
          <SectionBorderDecorationBlob91RightCenter
            firstBlobClassName="fill-pink-light"
            secondBlobClassName="fill-green-neon"
          />
          <FAQ.Section title="Beispiel 1">
            <ExampleOne />
          </FAQ.Section>
          <FAQ.Section title="Beispiel 2">
            <ExampleTwo />
          </FAQ.Section>
        </Block>
        <Block variant="green">
          <SectionBorderDecorationBlob43LeftTop
            firstBlobClassName="fill-white"
            secondBlobClassName="fill-green-neon"
          />
          <GetInvolved />
        </Block>
      </FAQ.Root>
    </>
  );
}
