import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/icon.png";

import HeroImage from "@/app/pictures/12.10.png";
import CollectImage from "@/app/pictures/sammeln.png";
import SignatureImage from "@/app/pictures/unterschriften.png";
import LogoBlock from "./logo-block";
import TimelineItem from "./timeline-item";

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
          <ul className="sm:grid sm:grid-cols-3 items-top gap-10 justify-between w-full">
            <li className="icon-claim">
              <Image
                src="/icons/check.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Sozialverträglichkeit</h3>
              <p>
                Fairer Klimaschutz,
                <br />
                der für alle bezahlbar bleibt.
              </p>
              <Link href="/">mehr dazu</Link>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/clock.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Jährliche Ziele</h3>
              <p>
                Planbarkeit und Transparenz
                <br />
                für Menschen und Wirtschaft.
              </p>
              <Link href="/">mehr dazu</Link>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/muscle.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Klimaneutralität 2040</h3>
              <p>
                Ein verantwortungsvoller und
                <br />
                wettbewerbsfähiger Beitrag unserer Stadt.
              </p>
              <Link href="/">mehr dazu</Link>
            </li>
          </ul>
          <Link href="/" className="button secondary">
            Unsere Forderungen
          </Link>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <h4 className="h2 underline-2 text-center">
            Über 139.000 Hamburger*innen unterstützen uns bereits.
            <br />
            Hilf mit!
          </h4>

          <div className="flex flex-col">
            <div className="flex flex-col justify-between items-center gap-8 sm:gap-24 -mt-6 sm:flex-row sm:mt-0">
              <figure className="max-w-[532px]">
                <Image
                  src={CollectImage}
                  alt="Das Team von Zukunftsentscheid Hamburg bei der Unterschriftensammlung"
                />
              </figure>
              <div className="flex flex-col gap-6 items-start">
                <h4 className="h3">Was ist noch zu tun?</h4>
                <p>
                  Nur mit deiner Unterstützung können wir den Entscheid zum
                  Erfolg führen. Ob beim Haustürwahlkampf, auf Veranstaltungen,
                  Plakate kleben, Flyer verteilen und in der
                  Öffentlichkeitsarbeit - jede Hilfe ist wertvoll!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-24 sm:flex-row-reverse">
              <figure className="max-w-[532px] hidden sm:block">
                <Image
                  src={SignatureImage}
                  alt="Zwei Mitglieder vom Zukunftsentscheid Hamburg präsentieren gesammelte Unterschriften"
                />
              </figure>
              <div className="flex flex-col gap-6 items-start">
                <h4 className="h3">Wie kannst du helfen?</h4>
                <p>
                  Komm zu einem unserer Infotreffen - jeden Mittwoch um 18:30
                  Uhr in der Kampstraße 15. Oder unterstütze uns bei Aktionen!
                </p>
                <Link href="/" className="button primary">
                  Mitmach-Möglichkeiten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-dark text-white">
        <div className="container py-12">
          <h5 className="h2 text-center mb-20">6 gute Gründe für dein Ja!</h5>

          <ul className="sm:grid sm:grid-cols-3 items-top gap-10 justify-between w-full">
            <li className="icon-claim">
              <Image
                src="/icons/vote.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Deine Stimme zählt</h3>
              <p>
                Unser Gesetzvorschlag wird bei einem Volksentscheid am 12.10.
                abgestimmt. Gewinnen wir, tritt unser verbessertes
                Klimaschutzgesetz in Kraft.
              </p>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/shake.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Wirtschaft & Wissenschaft an Board</h3>
              <p>
                Unser Gesetz wurde gemeinsam mit Expertise aus Wissenschaft,
                Sozialverbänden und Wirtschaft entwickelt. Auch OECD und
                Handelskammer stellen in einer Studie fest: Klimaneutralität bis
                2040 ist möglich!
              </p>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/for-all.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Klimaschutz, der alle mitnimmt</h3>
              <p>
                Klimaschutz, Wohlstand und soziale Gerechtigkeit sind keine
                Gegensätze. Unser Gesetz sorgt dafür, dass vom Klimaschutz alle
                profitieren.
              </p>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/globe.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Klimaschutz macht dein Leben besser</h3>
              <p>
                Solaranlagen und Sanierungen sparen Energie und Geld. Ein
                zuverlässiger ÖPNV bringt dich schneller ans Ziel.
              </p>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/hamburg.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Gemeinsam für Hamburg</h3>
              <p>Mehr als 160 Verbände und Unternehmen stehen hinter uns.</p>
            </li>
            <li className="icon-claim">
              <Image
                src="/icons/heart-hand.svg"
                alt=""
                width={80}
                height={80}
                aria-hidden
              />
              <h3>Was wir wollen, bewegt viele</h3>
              <p>
                Über 139.000 Hamburger*innen haben den Zukunftsentscheid bereits
                unterstützt. Jetzt kommt es auf dich an!
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-light">
        <LogoBlock className="container py-12" />
      </section>

      <section>
        <div className="container py-12 flex flex-col sm:flex-row gap-12 justify-around">
          <div className="flex flex-col max-w-[400px] gap-6 items-start">
            <h2 className="h2">Kurz vor Klimaschutzgesetz: Lasst uns den letzten Schritt zuSammen gehen</h2>
            <p>Damit ein Gesetz ein einer Volksabstimmung beschlossen werden kann, muss es drei Phasen durchlaufen: Die Volksinitiative, das Volksbegehren und den Volksentscheid.</p>
            <p>Dabei müssen immer mehr Menschen in immer kürzerer Zeit den Hamburger Zukunftsentscheid unterstützen. Schon seit Juni 2023 arbeiten viele Menschen daran, dass wir das schaffen.</p>
            <Link className="button secondary" href="/">So funktionierts</Link>
          </div>

          <ul className="flex flex-col gap-20">
            <TimelineItem completed title="Volksinitiative">
              <strong>Vorgabe:</strong> 10.000 Unterschriften in 6 Monaten<br/>
              <strong>Ergebnis:</strong> 23.316 Unterschriften in 4 Wochen
            </TimelineItem>
            <TimelineItem completed title="Volksbegehren">
              <strong>Vorgabe:</strong> 65.835 Unterschriften<br/>
              <strong>Ergebnis:</strong> 106.374 Unterschriften nach 3 Wochen
            </TimelineItem>
            <TimelineItem title="Volksentscheid">
              <strong>Vorgabe:</strong> Die Mehrheit der Hamburgerinnen und Hamburger, die zur Bürgerschaft wahlberechtigt sind, stimmt dafür. Stimmt die Mehrheit für den Gesetzestext, tritt er innerhalb eines Monats in Kraft.
            </TimelineItem>
          </ul>

        </div>
      </section>
    </main>
  );
}
