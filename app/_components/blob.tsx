import { twMerge } from "tailwind-merge";

type BlobProps = {
  id: number;
  size?: number;
  className?: string;
};

export default function Blob({ id, size = 80, className }: BlobProps) {
  return (
    <svg
      width={size}
      height={size}
      className={twMerge("inline-block", className)}
      aria-hidden
    >
      <use href={`/blobs/${id}.svg#${id}`} />
    </svg>
  );
}
