import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-light">
      <div className="container m-auto flex flex-col gap-14 py-24">
        <div className="flex flex-col justify-between gap-14 sm:flex-row">
          <figure className="sm:basis-[213px]">
            <Image
              src="/logo-inverted.svg"
              alt="Zukunftsentscheid-Hamburg Logo"
              width={213}
              height={58}
            />
          </figure>
          <form className="flex flex-col items-center gap-2">
            <h3 className="mb-3 font-bold">Du willst nichts mehr verpassen?</h3>
            <div className="flex w-full flex-col gap-2 lg:flex-row">
              <input
                placeholder="E-Mail"
                type="email"
                className="text-input w-full"
              />
              <button
                type="submit"
                className="button primary w-full text-nowrap sm:w-auto"
              >
                Newsletter Abonnieren
              </button>
            </div>
            <Link href="/" className="tiny underline">
              Informationen zum Datenschutz
            </Link>
          </form>
          <div className="flex items-end justify-between sm:basis-[213px] sm:flex-col sm:gap-10">
            <Link
              href="https://www.instagram.com/zukunftsentscheid_hamburg/"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Logo von Instagram"
                width={46}
                height={46}
              />
            </Link>
            <Link
              href="https://www.facebook.com/zukunftsentscheidhamburg"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Logo von Facebook"
                width={46}
                height={46}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/hamburger-zukunftsentscheid"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="Logo von LinkedIn"
                width={46}
                height={46}
              />
            </Link>
          </div>
        </div>
        <ul className="text-menu flex flex-wrap justify-center gap-4">
          <li>
            <Link href="/fragen-und-antworten">FAQ</Link>
          </li>
          <li>
            <Link href="/presse">Presse</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link href="/impressum">Impressum</Link>
          </li>
          <li>
            <Link href="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
