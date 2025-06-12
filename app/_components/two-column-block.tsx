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
};

const VARIANTS = {
  green: "bg-green-dark text-white",
  blue: "bg-blue-light",
  white: "bg-white",
  rose: "bg-pink-light",
} as const;

export default function TwoColumnBlock({ left, right }: BlockProps) {
  return (
    <section className={"relative z-0 overflow-x-clip"}>
      <div
        className={twMerge(
          "absolute left-0 -z-1 h-full w-[50%]",
          VARIANTS[left.variant]
        )}
      ></div>
      <div
        className={twMerge(
          "absolute right-0 -z-1 h-full w-[50%]",
          VARIANTS[right.variant]
        )}
      ></div>
      <div className="container grid grid-cols-2">
        <div
          className={twMerge(
            "flex flex-col items-center gap-10 py-14 sm:py-24",
            VARIANTS[left.variant],
            left.className
          )}
        >
          {left.content}
        </div>
        <div
          className={twMerge(
            "flex flex-col items-center gap-10 py-14 sm:py-24",
            VARIANTS[right.variant],
            right.className
          )}
        >
          {right.content}
        </div>
      </div>
    </section>
  );
}
