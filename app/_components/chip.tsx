import { twMerge } from "tailwind-merge";

const INDICATOR_VARIANTS = {
  pink: "bg-pink-dark",
  blueLight: "bg-blue-light",
} as const;

interface ChipProps {
  indicatorVariant: keyof typeof INDICATOR_VARIANTS;
  label: string;
  className?: string;
}

export default function Chip({
  indicatorVariant,
  label,
  className,
}: ChipProps) {
  return (
    <div
      className={twMerge(
        "inline-flex flex-row flex-nowrap items-center gap-3 rounded-full border-2 border-white px-2 py-1",
        className
      )}
    >
      <div
        className={twMerge(
          "h-5 w-5 rounded-full",
          INDICATOR_VARIANTS[indicatorVariant]
        )}
      />
      <strong>{label}</strong>
    </div>
  );
}
