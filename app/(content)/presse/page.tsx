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
        {PRESS_RELEASES.map((item) => (
          <PressReleaseItem key={item.title} pressRelease={item} />
        ))}
      </Block>
    </>
  );
}
