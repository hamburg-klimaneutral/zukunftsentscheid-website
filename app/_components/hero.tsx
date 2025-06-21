import { twMerge } from "tailwind-merge";

export default function Hero({
  children,
  asset,
}: {
  children: React.ReactNode;
  asset?: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "flex w-full flex-col-reverse items-center md:flex-row-reverse",
        asset ? "justify-between" : "justify-center"
      )}
    >
      {asset}
      <div
        className={twMerge(
          "relative flex flex-col gap-4 whitespace-pre-line",
          asset ? "items-start" : "basis-full items-center"
        )}
      >
        {children}
      </div>
    </div>
  );
}
