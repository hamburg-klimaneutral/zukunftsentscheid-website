import Block from "@/app/_components/block";
import { PRESS_RELEASES } from "@/app/(content)/presse/items";
import PressReleaseItem from "@/app/(content)/presse/item";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import SectionBorderDecorationBlob65LeftTop from "@/app/_components/blob-section-decorators/65-left-top";
import SectionBorderDecorationBlob91RightCenter from "@/app/_components/blob-section-decorators/91-right-center";

export default function PressePage() {
  return (
    <>
      <Block variant="green">
        <h1 className="h1">Presse</h1>
      </Block>

      <Block className="max-w-5xl">
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <SectionBorderDecorationBlob65LeftTop
          firstBlobClassName="fill-pink-light"
          secondBlobClassName="fill-green-neon"
        />
        <SectionBorderDecorationBlob91RightCenter
          firstBlobClassName="fill-pink-light"
          secondBlobClassName="fill-green-neon"
        />

        <p className="max-w-xl text-center">
          Unser Presseteam erreichst du per Mail an{" "}
          <a
            href="mailto:presse@zukunftsentscheid-hamburg.de"
            target="_blank"
            className="text-nowrap underline"
          >
            presse@zukunftsentscheid-hamburg.de
          </a>{" "}
          oder per Telefon unter{" "}
          <a
            href="tel:+494020918071"
            target="_blank"
            className="text-nowrap underline"
          >
            040 20918071
          </a>
          .
        </p>

        {PRESS_RELEASES.map((item) => (
          <PressReleaseItem key={item.title} pressRelease={item} />
        ))}
      </Block>
    </>
  );
}
