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
    <article className="border-blue-light flex w-full flex-col gap-6 border p-5 md:flex-row">
      {pressRelease.image && (
        <div className="hidden shrink-0 basis-1/3 md:block">
          {pressRelease.image}
        </div>
      )}
      <div className="flex max-w-xl shrink flex-col">
        <p className="pb-2">{pressRelease.date}</p>
        <h3 className="h3 pb-4">{pressRelease.title}</h3>
        {pressRelease.image && (
          <div className="mb-4 w-full md:hidden">{pressRelease.image}</div>
        )}
        <p>{pressRelease.description}</p>
      </div>
      <Link
        className="ml-auto shrink-0 self-end"
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
