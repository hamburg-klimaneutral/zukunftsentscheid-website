import Block from "@/app/_components/block";
import { GridIcon } from "@/app/_components/icon-grid";
import Link from "next/link";
import Hero from "@/app/_components/hero";

export default function ContactSuccessPage() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>Kontakt</h1>
          <h2 className="h1">Vielen lieben Dank!</h2>
        </Hero>
      </Block>
      <Block>
        <GridIcon
          src="/icons/book-heart.svg"
          title="Abgeschickt!"
          className="max-w-xl"
        >
          Wir geben uns Mühe dein Anliegen so schnell wie es geht zu bearbeiten.
          Wenn du nicht so lange warten möchtest, schau dir an, wie du helfen
          kannst.
          <Link href="/mitmachen" className="button primary mt-8">
            Jetzt mitmachen
          </Link>
        </GridIcon>
      </Block>
    </main>
  );
}
