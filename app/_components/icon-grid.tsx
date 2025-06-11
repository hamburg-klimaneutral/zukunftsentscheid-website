import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Blob from "@/app/_components/blob";

export default function IconGrid({ children }: { children: React.ReactNode }) {
  return (
    <ul className="items-top grid w-full grid-cols-1 justify-between gap-10 sm:grid-cols-3">
      {children}
    </ul>
  );
}

export function GridIcon({
  src,
  title,
  blobId,
  children,
  className,
}: {
  src: string;
  title: string;
  blobId: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={twMerge(
        "mx-auto flex max-w-[330px] basis-full flex-col items-center fill-white text-center whitespace-pre-line",
        className
      )}
    >
      <div className="relative mb-6 flex h-20 w-20 flex-col">
        <Blob id={blobId} className="absolute top-0 left-0 z-0 items-center" />
        <Image
          src={src}
          alt=""
          width={32}
          height={32}
          aria-hidden
          className="z-1 m-auto w-auto"
        />
      </div>
      <h3 className="h3 mb-2.5">{title}</h3>
      {children}
    </li>
  );
}
