import { twMerge } from "tailwind-merge";

export type BlockProps = {
  left: {
    variant: keyof typeof VARIANTS;
    content: React.ReactNode;
    className?: string;
  };
  right: {
    variant: keyof typeof VARIANTS;
    content: React.ReactNode;
    className?: string;
  };
  className?: string;
};

const VARIANTS = {
  green: "bg-green-dark text-white",
  blue: "bg-blue-light",
  white: "bg-white",
  rose: "bg-pink-light",
} as const;

export default function TwoColumnBlock({ left, right, className }: BlockProps) {
  return (
    <div className="relative">
      {/* backgrounds left + right */}
      <div
        className={twMerge(
          "absolute left-0 -z-1 hidden h-full w-[50%] md:block",
          VARIANTS[left.variant]
        )}
      ></div>
      <div
        className={twMerge(
          "absolute right-0 -z-1 hidden h-full w-[50%] md:block",
          VARIANTS[right.variant]
        )}
      ></div>

      {/* content left + right */}
      <div
        className={twMerge(
          "grid grid-cols-1 md:container md:grid-cols-2 md:gap-16",
          className
        )}
      >
        <section
          className={twMerge(
            "relative z-0 flex flex-col items-center gap-10 overflow-x-clip py-14 max-md:container sm:py-24",
            VARIANTS[left.variant],
            left.className
          )}
        >
          {left.content}
        </section>
        <section
          className={twMerge(
            "relative z-0 flex flex-col items-center gap-10 overflow-x-clip py-14 max-md:container sm:py-24",
            VARIANTS[right.variant],
            right.className
          )}
        >
          {right.content}
        </section>
      </div>
    </div>
  );
}
