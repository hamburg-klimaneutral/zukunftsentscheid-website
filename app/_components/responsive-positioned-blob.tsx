import { twMerge } from "tailwind-merge";

type Position = string | number;

type RelativePositionedBlobProps = {
  id: number;
  className?: string;
  rotation?: number;
  sizePercentage: { height: number } | { width: number };
  mirror?: boolean;
  position: (
    | {
        top: Position;
      }
    | { bottom: Position }
  ) &
    (
      | {
          left: Position;
        }
      | { right: Position }
    );
  children?: React.ReactNode;
};

export default function ResponsivePositionedBlob({
  id,
  className,
  sizePercentage,
  position,
  rotation,
  mirror,
  children,
}: RelativePositionedBlobProps) {
  let transform = "";

  if (rotation) {
    transform += `rotate(${rotation}deg)`;
  }

  const svgSize =
    "height" in sizePercentage ? { height: "100%" } : { width: "100%" };

  const styleSize =
    "height" in sizePercentage
      ? { height: `${sizePercentage.height}%` }
      : { width: `${sizePercentage.width}%` };

  return (
    <figure
      className={twMerge("absolute inline-block", className)}
      style={{
        ...position,
        ...styleSize,
      }}
    >
      <svg
        {...svgSize}
        viewBox={"0 0 1 1"}
        aria-hidden
        style={{ transform }}
        className={twMerge(mirror && "scale-x-[-1]")}
      >
        <use href={`/blobs/${id}.svg#${id}`} />
      </svg>
      {children}
    </figure>
  );
}
