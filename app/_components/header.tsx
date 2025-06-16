import Link from "next/link";
import Image from "next/image";
import Navigation, { MobileOverlay } from "@/app/_components/navigation";

export default function Header() {
  return (
    <header className="bg-green-dark relative z-20 py-6 text-white">
      <div className="container m-auto flex items-center justify-between">
        <figure className="shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Zukunftsentscheid-Hamburg Logo"
              width={213}
              height={58}
              priority
            />
          </Link>
        </figure>
        {/* Desktop */}
        <Navigation className="hidden lg:block" orientation="horizontal" />
        {/* Mobile */}
        <MobileOverlay>
          <Navigation orientation="vertical" />
        </MobileOverlay>
      </div>
    </header>
  );
}
