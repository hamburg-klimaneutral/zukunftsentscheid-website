import { twMerge } from "tailwind-merge";

type Position = string | number;

type RelativePositionedBlobProps = {
  id: number;
  className?: string;
  rotation?: number;
  sizePercentage: { height: number } | { width: number };
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
};

export default function ResponsivePositionedBlob({
  id,
  className,
  sizePercentage,
  position,
  rotation,
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
    <svg
      {...svgSize}
      viewBox={"0 0 1 1"}
      className={twMerge("absolute inline-block", className)}
      aria-hidden
      style={{
        ...position,
        ...styleSize,
        transform,
      }}
    >
      <use href={`/blobs/${id}.svg#${id}`} />
    </svg>
  );
}
