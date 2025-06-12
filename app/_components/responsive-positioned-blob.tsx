import { twMerge } from "tailwind-merge";

type Position = string | number;

type RelativePositionedBlobProps = {
  id: number;
  className?: string;
  rotation?: number;
  heightPercentage: number;
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
  heightPercentage,
  position,
  rotation,
}: RelativePositionedBlobProps) {
  let transform = "";

  if (rotation) {
    transform += `rotate(${rotation}deg)`;
  }

  return (
    <svg
      height={"100%"}
      viewBox={"0 0 1 1"}
      className={twMerge("absolute inline-block", className)}
      aria-hidden
      style={{
        ...position,
        height: `${heightPercentage}%`,
        transform,
      }}
    >
      <use href={`/blobs/${id}.svg#${id}`} />
    </svg>
  );
}
