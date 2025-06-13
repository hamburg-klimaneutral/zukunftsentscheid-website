import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";

interface PressReleaseHeroBlockProps {
  title: string;
  date: string;
}

export default function PressReleaseHeroBlock({
  title,
  date,
}: PressReleaseHeroBlockProps) {
  return (
    <Block variant="green">
      <Hero>
        <h1>{date}</h1>
        <h2 className="h2 text-center">{title}</h2>
      </Hero>
    </Block>
  );
}
