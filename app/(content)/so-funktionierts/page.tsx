import Block from "@/app/_components/block";
import Timeline from "@/app/_components/timeline";
import TimelineItems from "./timeline-items.mdx";
import Hero from "@/app/_components/hero";

export default function AblaufPage() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>Die verschiedenen Phasen</h1>
          <h2 className="h1">Der Ablauf</h2>
        </Hero>
      </Block>
      <Block className="gap-24">
        <div className="max-w-xl space-y-4">
          <p>
            Damit ein Gesetz ein einer Volksabstimmung beschlossen werden kann,
            muss es drei Phasen durchlaufen: Die Volksinitiative, das
            Volksbegehren und den Volksentscheid.
          </p>
          <p>
            Dabei müssen immer mehr Menschen in immer kürzerer Zeit den
            Hamburger Zukunftsentscheid unterstützen. Schon seit Juni 2023
            arbeiten viele Menschen daran, dass wir das schaffen:
          </p>
        </div>
        <Timeline.Root className="max-w-2xl">
          <TimelineItems />
        </Timeline.Root>
      </Block>
    </main>
  );
}
