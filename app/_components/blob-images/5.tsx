import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { ImageBlobProps } from "@/app/_components/blob-images/type";
import { twMerge } from "tailwind-merge";

export default function ImageBlob5({
  children,
  firstBlobClassName,
  secondBlobClassName,
}: ImageBlobProps) {
  return (
    <figure className="relative">
      <ResponsivePositionedBlob
        id={33}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "62.5%", bottom: "0%" }}
        rotation={-99}
        sizePercentage={{ height: 61.7 }}
      />
      <figure className="blob-[/blobs/5.svg] hidden sm:block">
        {children}
      </figure>
      <ResponsivePositionedBlob
        id={45}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "66%", bottom: "-1%" }}
        rotation={62.425}
        sizePercentage={{ height: 15 }}
      />
    </figure>
  );
}
