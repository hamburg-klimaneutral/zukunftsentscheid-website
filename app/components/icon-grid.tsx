import Image from "next/image";

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
}: {
  src: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col items-center max-w-[330px] text-center basis-full mx-auto whitespace-pre-line">
      <Image src={src} alt="" width={80} height={80} aria-hidden className="mb-6 w-auto" />
      <h3 className="h3 mb-2.5">{title}</h3>
      {children}
    </li>
  );
}
