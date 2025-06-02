import HeroImage from "@/public/pictures/12.10.png";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/icon.svg";

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
            <div className="right-10 sm:-right-2 -rotate-12 absolute top-4 sm:top-1/4 bg-white h3 p-1 text-green-dark transform">
              Sag ja
              <Image
                src={Icon}
                className="h-7 w-auto inline sm:h-11"
                aria-hidden="true"
                alt=""
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
        <div className="container flex flex-col items-center py-12 text-center">
          <h2 className="h2 max-w-xl underline-karl">
            Gemeinsam machen wir Hamburgs Klimapolitik sozial, planbar und
            verantwortungsbewusst.
          </h2>
        </div>
      </section>
    </main>
  );
}
