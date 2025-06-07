import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function IconGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 items-top gap-10 justify-between w-full">
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
    <li className={twMerge("flex flex-col items-center max-w-[330px] text-center basis-full mx-auto whitespace-pre-line", className)}>
      <Image src={src} alt="" width={80} height={80} aria-hidden className="mb-6 w-auto" />
      <h3 className="h3 mb-2.5">{title}</h3>
      {children}
    </li>
  );
}
