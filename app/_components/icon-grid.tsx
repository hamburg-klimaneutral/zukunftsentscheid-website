import Image from "next/image";
import { twMerge } from "tailwind-merge";

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
  children,
  className,
}: {
  src: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={twMerge(
        "mx-auto flex max-w-[330px] basis-full flex-col items-center text-center whitespace-pre-line",
        className
      )}
    >
      <Image
        src={src}
        alt=""
        width={80}
        height={80}
        aria-hidden
        className="mb-6 w-auto"
      />
      <h3 className="h3 mb-2.5">{title}</h3>
      {children}
    </li>
  );
}
