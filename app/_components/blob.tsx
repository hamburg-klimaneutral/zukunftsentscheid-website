import { twMerge } from "tailwind-merge";

type BlobProps = {
  id: number;
  size?: number;
  variant?: keyof typeof VARIANTS;
  className?: string;
};

const VARIANTS = {
  white: "fill-white",
  pink: "fill-pink-light",
} as const;

export default function Blob({
  id,
  size = 80,
  variant = "white",
  className,
}: BlobProps) {
  return (
    <svg
      width={size}
      height={size}
      className={twMerge("inline-block", VARIANTS[variant], className)}
    >
      <use
        href={`/blobs/${id}.svg#${id}`}
        className={twMerge("inline-block", VARIANTS[variant], className)}
      />
    </svg>
  );
}
