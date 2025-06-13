import { twMerge } from "tailwind-merge";
import { QuoteSvg } from "@/app/_components/icons/quote";

interface TextQuoteProps {
  children: React.ReactNode;
  variant: keyof typeof VARIANTS;
  author: string;
  className?: string;
}

const VARIANTS = {
  blue: "text-blue-light",
  pinkDark: "text-pink-dark",
  greenNeon: "text-green-neon",
  pinkLight: "text-pink-light",
} as const;

export default function TextQuote({
  children,
  author,
  variant,
  className,
}: TextQuoteProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-5">
      <figure className={VARIANTS[variant]}>
        <QuoteSvg />
      </figure>
      <blockquote
        className={twMerge("quote-small space-y-4 text-center", className)}
      >
        {children}
      </blockquote>
      <p>{author}</p>
    </div>
  );
}
