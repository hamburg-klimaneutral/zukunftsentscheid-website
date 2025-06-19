import Block from "@/app/_components/block";
import { PRESS_RELEASES } from "@/app/(content)/presse/items";
import PressReleaseItem from "@/app/(content)/presse/item";

export default function PressePage() {
  return (
    <>
      <Block variant="green">
        <h1 className="h1">Presse</h1>
      </Block>

      <Block className="max-w-5xl">
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
