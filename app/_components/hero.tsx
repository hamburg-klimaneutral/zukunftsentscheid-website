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
      {asset && (
        <figure className="relative -mt-6 -mb-32 -ml-12 basis-1/2 sm:-ml-0">
          {asset}
        </figure>
      )}
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
