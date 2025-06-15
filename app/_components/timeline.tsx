import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface RootProps {
  children: React.ReactNode;
  className?: string;
}

function Root({ children, className }: RootProps) {
  return (
    <ul className={twMerge("flex flex-col gap-20", className)}>{children}</ul>
  );
}

function Item({
  title,
  time,
  iconSrc,
  completed,
  children,
  className,
}: {
  className?: string;
  title: string;
  iconSrc?: string;
  time?: string;
  completed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className="group flex gap-6">
      <figure className="relative flex shrink-0 flex-col items-center">
        <div
          className={twMerge(
            "absolute top-1 -mt-12 h-12 w-1.5 group-first:hidden",
            completed ? "bg-green-dark" : "bg-blue-light"
          )}
        />
        <Image
          src={
            completed
              ? "/icons/timeline-check.svg"
              : "/icons/timeline-exclamation.svg"
          }
          width={47}
          height={47}
          alt=""
          aria-hidden
        />
        <div
          className={twMerge(
            "-mt-1 -mb-11 w-1.5 flex-1 group-last:hidden",
            completed ? "bg-green-dark" : "bg-blue-light"
          )}
        />
      </figure>
      <div className="flex flex-col gap-2">
        {time && <p>{time}</p>}
        <div
          className={twMerge(
            "flex flex-row items-center gap-2",
            time && "mb-2"
          )}
        >
          {iconSrc && (
            <Image src={iconSrc} alt="" width={32} height={32} aria-hidden />
          )}
          <h3 className="h3">{title}</h3>
        </div>
        <div className={className}>{children}</div>
      </div>
    </li>
  );
}

export default {
  Root,
  Item,
};
