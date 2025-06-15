import Link from "next/link";
import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";
import MainLayout from "@/app/_components/layout";

export default function NotFound() {
  return (
    <MainLayout>
      <main>
        <Block variant="green">
          <Hero>
            <h1>Error 404</h1>
            <h2 className="h1">Diese Seite existiert leider nicht</h2>
          </Hero>
        </Block>
        <Block className="gap-8">
          <p className="max-w-xl text-center">
            Irgendwas ist hier schief gelaufen. Komm einfach schnell zurück zu
            unserer Startseite.
          </p>
          <Link href="/" className="button secondary alt">
            Startseite
          </Link>
        </Block>
      </main>
    </MainLayout>
  );
}
