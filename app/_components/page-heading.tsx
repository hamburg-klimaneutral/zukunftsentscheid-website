import { twMerge } from "tailwind-merge";

export type PageHeadlineProps = {
  heading: string;
  subheading: string;
  className?: string;
};

export default function PageHeading({
  subheading,
  heading,
  className,
}: PageHeadlineProps) {
  return (
    <div
      className={twMerge("flex w-xl flex-col items-center gap-4", className)}
    >
      <p>{subheading}</p>
      <h1 className="h1">{heading}</h1>
    </div>
  );
}
