import Image from "next/image";

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
            alt="Zukunftsentscheid Logo"
            width={213}
            height={58}
            priority
          />
        </div>
      </header>
      {children}
      <footer className="bg-blue-light py-3 sm:py-6">
        <ul className="container m-auto text-menu flex gap-4 justify-center">
          <li>FAQ</li>
          <li>Presse</li>
          <li>Kontakt</li>
          <li>Impressum</li>
          <li>Datenschutz</li>
        </ul>
      </footer>
    </>
  );
}
