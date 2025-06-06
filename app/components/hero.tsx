import { twMerge } from "tailwind-merge";

export default function Hero({
  children,
  asset,
}: {
  children: React.ReactNode;
  asset?: React.ReactNode;
}) {
  return (
    <div className={twMerge('flex flex-col-reverse md:flex-row-reverse', asset ? "justify-between" : "justify-center")}>
      {asset && (
        <figure className="-mb-32 -mt-6 -ml-12 relative basis-1/2 sm:-ml-0">
          {asset}
        </figure>
      )}
      <div
        className={twMerge(
          "flex flex-col gap-4 whitespace-pre-line relative",
          asset
            ? "items-start justify-center basis-1/2"
            : "items-center basis-full",
        )}
      >
        {children}
      </div>
    </div>
  );
}
