import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-green-dark px-6 py-12 text-white">
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
      <main className="m-auto px-6 py-12">
        <div className="container m-auto flex flex-col gap-4 prose">
          {children}
        </div>
      </main>
      <footer className="bg-blue-light px-6 py-12">
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
