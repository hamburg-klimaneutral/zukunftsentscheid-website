import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { twMerge } from "tailwind-merge";
import { ImageBlobProps } from "@/app/_components/blob-images/type";

export default function ImageBlob68Rotated({
  children,
  firstBlobClassName,
  secondBlobClassName,
  secondBlobChildren,
  className,
}: ImageBlobProps) {
  return (
    <figure className={twMerge("relative", className)}>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={81}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "-26%", top: "-7%" }}
        sizePercentage={{ height: 112 }}
      />
      <figure className="blob-[/blobs/68-rotated.svg]">{children}</figure>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={88}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "0%", bottom: "0%" }}
        rotation={-55.3}
        sizePercentage={{ height: 25 }}
      >
        {secondBlobChildren}
      </ResponsivePositionedBlob>
    </figure>
  );
}
