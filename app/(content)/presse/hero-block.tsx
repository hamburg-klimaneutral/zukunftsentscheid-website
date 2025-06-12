import type { PressRelease } from "@/app/(content)/presse/type";
import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";

interface PressReleaseHeroBlockProps {
  pressRelease: PressRelease;
}

export default function PressReleaseHeroBlock(
  props: PressReleaseHeroBlockProps
) {
  return (
    <Block variant="green">
      <Hero>
        <h1>{props.pressRelease.date}</h1>
        <h2 className="h2 text-center">{props.pressRelease.title}</h2>
      </Hero>
    </Block>
  );
}
