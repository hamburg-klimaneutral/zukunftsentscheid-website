import { twMerge } from "tailwind-merge";

export type BlockProps = {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
};

const VARIANTS = {
  green: "bg-green-dark text-white",
  blue: "bg-blue-light",
  white: "bg-white",
} as const;

export default function Block({
  variant = "white",
  children,
  className,
}: BlockProps) {
  return (
    <section className={VARIANTS[variant]}>
      <div
        className={twMerge(
          "container py-14 sm:py-24 flex flex-col items-center gap-10",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
