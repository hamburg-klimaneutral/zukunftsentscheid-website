import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface InfoBoxProps {
  iconSrc: string;
  title?: string;
  variant?: keyof typeof VARIANTS;
  children: React.ReactNode;
  border?: boolean;
  round?: boolean;
}

const VARIANTS = {
  green: "bg-green-dark border-blue-light",
  blue: "bg-blue-light-80 border-green-dark",
  white: "bg-white border-green-dark",
} as const;

export default function InfoBox({
  title,
  children,
  iconSrc,
  round,
  variant = "white",
  border = true,
}: InfoBoxProps) {
  return (
    <div
      className={twMerge(
        "border-green-dark flex flex-col items-start gap-2.5 p-4",
        border && "border-2",
        round && "rounded-full px-9",
        VARIANTS[variant]
      )}
    >
      <div className="flex flex-row gap-3">
        <Image
          src={iconSrc}
          alt=""
          width={24}
          height={24}
          aria-hidden
          className="z-1"
        />
        {title && <strong>{title}</strong>}
      </div>
      {children}
    </div>
  );
}
