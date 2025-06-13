import { twMerge } from "tailwind-merge";

export type BlockProps = {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
  blockClassName?: string;
};

const VARIANTS = {
  green: "bg-green-dark text-white",
  blue: "bg-blue-light",
  white: "bg-white",
  pinkLight: "bg-pink-light",
} as const;

export default function Block({
  variant = "white",
  children,
  className,
  blockClassName,
}: BlockProps) {
  return (
    <section
      className={twMerge(
        VARIANTS[variant],
        "relative z-0 overflow-x-clip",
        blockClassName
      )}
    >
      <div
        className={twMerge(
          "container flex flex-col items-center gap-10 py-14 sm:py-24",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
