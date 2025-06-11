import { twMerge } from "tailwind-merge";

type RelativePositionedBlobProps = {
  id: number;
  className?: string;
  rotation?: number;
  heightPercentage: number;
  positionPercentages: (
    | {
        top: number;
      }
    | { bottom: number }
  ) &
    (
      | {
          left: number;
        }
      | { right: number }
    );
};

export default function ResponsivePositionedBlob({
  id,
  className,
  heightPercentage,
  positionPercentages,
  rotation,
}: RelativePositionedBlobProps) {
  const percentagePositions = Object.fromEntries(
    Object.entries(positionPercentages).map(([key, value]) => [
      key,
      `${value}%`,
    ])
  );

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
        ...percentagePositions,
        height: `${heightPercentage}%`,
        transform,
      }}
    >
      <use href={`/blobs/${id}.svg#${id}`} />
    </svg>
  );
}
