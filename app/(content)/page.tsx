import HeroImage from "@/public/pictures/12.10.png";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/icon.svg";

export default function HomePage() {
  return (
    <main>
      <section className="bg-green-dark pb-12">
        <div className="container m-auto markdown flex md:flex-row-reverse flex-col-reverse text-white">
          <figure className="-ml-24 -mt-6 -mb-20 sm:-my-24 md:mt-0 lg:min-w-lg xl:min-w-2xl relative">
            <Image
              sizes="100vw"
              className="w-full h-auto"
              src={HeroImage}
              alt="Das Team von Zukunftsentscheid Hamburg präsentiert den Termin der Volksabstimmung am 12.10.2025 vor der Kulisse des Hamburger Rathauses."
              priority
            />
            <div className="h3 bg-white text-green-dark transform -rotate-12 absolute top-1/4 -right-2 p-1">
              Sag ja
              <Image
                src={Icon}
                className="h-7 sm:h-11 w-auto inline"
                aria-hidden="true"
                alt=""
              />
              <br />
              zu Hamburg
            </div>
          </figure>
          <div className="flex flex-col gap-8 items-start max-w-2xl justify-center relative">
            <h1 className="h1 sm:hidden">
              Mit dem <mark>Volksentscheid</mark> am 12.10. geben wir Hamburg
              ein
              <br />
              <mark className="short">besseres</mark>{" "}
              <mark className="long">Klimaschutzgesetz!</mark>
            </h1>
            <h1 className="h1 hidden sm:block">
              Mit dem <mark>Volksentscheid</mark> am 12.10. geben wir Hamburg
              ein
              <br />
              <mark className="long">besseres Klimaschutzgesetz!</mark>
            </h1>
            <p>Hamburg entscheidet fürs Klima - sei dabei!</p>
            <Link className="button primary" href="/mitmachen">
              Jetzt Mitmachen
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-light">
        <div className="container py-12 flex flex-col items-center text-center">
          <h2 className="h2 max-w-xl underline-karl">
            Gemeinsam machen wir Hamburgs Klimapolitik sozial, planbar und
            verantwortungsbewusst.
          </h2>
        </div>
      </section>
    </main>
  );
}
