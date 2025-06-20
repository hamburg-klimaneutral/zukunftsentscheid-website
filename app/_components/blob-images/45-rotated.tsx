import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { twMerge } from "tailwind-merge";
import { ImageBlobProps } from "@/app/_components/blob-images/type";

export default function ImageBlob45Rotated({
  children,
  firstBlobClassName,
  secondBlobClassName,
  className,
}: ImageBlobProps) {
  return (
    <figure className={twMerge("relative", className)}>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={52}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "0%", top: "0%" }}
        sizePercentage={{ height: 90 }}
        rotation={-40}
      />
      <figure className="blob-[/blobs/45-rotated.svg]">{children}</figure>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={84}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "54%", bottom: "60%" }}
        rotation={-90}
        sizePercentage={{ height: 12 }}
      ></ResponsivePositionedBlob>
    </figure>
  );
}
