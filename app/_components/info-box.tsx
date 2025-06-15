import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface InfoBoxProps {
  iconSrc: string;
  variant?: keyof typeof VARIANTS;
  children: React.ReactNode;
}

const VARIANTS = {
  green: "bg-green-dark border-blue-light",
  blue: "bg-blue-light-80 border-green-dark",
  white: "border-green-dark",
} as const;

export default function InfoBox({
  children,
  iconSrc,
  variant = "white",
}: InfoBoxProps) {
  return (
    <div
      className={twMerge(
        "border-green-dark flex flex-col items-start gap-2.5 border-2 p-4",
        VARIANTS[variant]
      )}
    >
      <Image
        src={iconSrc}
        alt=""
        width={24}
        height={24}
        aria-hidden
        className="z-1"
      />
      {children}
    </div>
  );
}
