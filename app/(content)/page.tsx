import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/icon.png";

import HeroImage from "@/app/pictures/12.10.png";

export default function HomePage() {
  return (
    <main>
      <section className="bg-green-dark py-12">
        <div className="container m-auto flex flex-col-reverse text-white md:flex-row-reverse">
          <figure className="-mb-20 -mt-6 -ml-12 relative grow md:-my-24 md:mt-0 md:ml-0">
            <Image
              sizes="100vw"
              className="h-auto w-full"
              src={HeroImage}
              alt="Das Team von Zukunftsentscheid Hamburg präsentiert den Termin der Volksabstimmung am 12.10.2025 vor der Kulisse des Hamburger Rathauses."
              priority
            />
            <div className="right-10 sm:-right-2 -rotate-12 absolute top-4 sm:top-1/4 bg-white h3 px-2.5 py-1 text-green-dark transform">
              Sag ja
              <Image
                src={Icon}
                className="h-7 w-auto inline sm:h-11"
                aria-hidden="true"
                alt=""
                priority
              />
              <br />
              zu Hamburg
            </div>
          </figure>
          <div className="relative flex flex-col items-start justify-center gap-8">
            <h1 className="block h1 max-w-[230px] sm:max-w-[420px] lg:hidden">
              Mit dem <mark>Volksentscheid</mark> am 12.10. geben wir Hamburg
              ein <mark className="short">besseres</mark>{" "}
              <mark className="long">Klimaschutzgesetz!</mark>
            </h1>
            <h1 className="hidden h1 max-w-[530px] lg:block">
              Mit dem <mark>Volksentscheid</mark> am 12.10. geben wir Hamburg
              ein <br />
              <mark className="long">besseres Klimaschutzgesetz!</mark>
            </h1>
            <p>Hamburg entscheidet fürs Klima - sei dabei!</p>
            <Link className="button primary" href="/">
              Jetzt Mitmachen
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-light">
        <div className="container flex flex-col items-center py-12 text-center gap-10">
          <h2 className="h2 max-w-xl underline-1">
            Gemeinsam machen wir Hamburgs Klimapolitik sozial, planbar und
            verantwortungsbewusst.
          </h2>
          <ul className="flex flex-col sm:flex-row items-center gap-10 justify-between w-full">
            <li className="icon-claim">
              <Image src="/icons/check.svg" alt="" width={80} height={80} aria-hidden />
              <h3>Sozialverträglichkeit</h3>
              <p>Fairer Klimaschutz,<br />der für alle bezahlbar bleibt.</p>
              <Link href="/">mehr dazu</Link>
            </li>
            <li className="icon-claim">
              <Image src="/icons/clock.svg" alt="" width={80} height={80} aria-hidden />
              <h3>Jährliche Ziele</h3>
              <p>Planbarkeit und Transparenz<br />für Menschen und Wirtschaft.</p>
              <Link href="/">mehr dazu</Link>
            </li>
            <li className="icon-claim">
              <Image src="/icons/muscle.svg" alt="" width={80} height={80} aria-hidden />
              <h3>Klimaneutralität 2040</h3>
              <p>Ein verantwortungsvoller und<br />wettbewerbsfähiger Beitrag unserer Stadt.</p>
              <Link href="/">mehr dazu</Link>
            </li>
          </ul>
          <Link href="/" className="button secondary">Unsere Forderungen</Link>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <h4 className="h2 underline-2 text-center">Über 139.000 Hamburger*innen unterstützen uns bereits.<br />Hilf mit!</h4>

        </div>
      </section>
    </main>
  );
}
