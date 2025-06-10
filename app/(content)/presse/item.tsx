import type { PressRelease } from "@/app/(content)/presse/type";
import Link from "next/link";
import Image from "next/image";

interface PressReleaseItemProps {
  pressRelease: PressRelease;
}

export default function PressReleaseItem({
  pressRelease,
}: PressReleaseItemProps) {
  return (
    <article className="border-blue-light flex max-w-xl flex-col border p-5">
      <p className="pb-2">{pressRelease.date}</p>
      <h3 className="h3 pb-4">{pressRelease.title}</h3>
      <p>{pressRelease.description}</p>
      <Link
        className="mt-4 self-end"
        title={`Zur Pressemitteilung "${pressRelease.title}" vom ${pressRelease.date}`}
        href={`/presse/${pressRelease.slug}/`}
      >
        <Image
          width={24}
          height={24}
          src="/icons/arrow-right-circle.svg"
          alt="Pfeil nach rechts"
        />
      </Link>
    </article>
  );
}
