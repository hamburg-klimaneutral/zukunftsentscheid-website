import Image from "next/image";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-green-dark py-3 sm:py-6 text-white">
        <div className="container m-auto">
          <Image
            src="/logo.svg"
            alt="Zukunftsentscheid-Hamburg Logo"
            width={213}
            height={58}
            priority
          />
        </div>
      </header>
      {children}
      <footer className="bg-blue-light">
        <div className="container m-auto py-12 flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row justify-between gap-14">
            <figure className="sm:basis-[213px]">
              <Image
                src="/logo-inverted.svg"
                alt="Zukunftsentscheid-Hamburg Logo"
                width={213}
                height={58}
              />
            </figure>
            <form className="flex flex-col items-center gap-2 ">
              <h3 className="font-bold mb-3">
                Du willst nichts mehr verpassen?
              </h3>
              <div className="flex flex-col lg:flex-row gap-2 w-full">
                <input
                  placeholder="E-Mail"
                  type="email"
                  className="text-input w-full"
                />
                <button type="submit" className="button primary w-full text-nowrap sm:w-auto">
                  Newsletter Abonnieren
                </button>
              </div>
              <Link href="/" className="tiny underline">
                Informationen zum Datenschutz
              </Link>
            </form>
            <div className="flex justify-between sm:flex-col sm:gap-10 sm:basis-[213px] items-end">
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
          <ul className="text-menu flex flex-wrap gap-4 justify-center">
            <li>FAQ</li>
            <li>Presse</li>
            <li>Kontakt</li>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
