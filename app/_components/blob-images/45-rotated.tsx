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
        position={{ left: "-18%", top: "20%" }}
        sizePercentage={{ height: 81 }}
      />
      <figure className="blob-[/blobs/45-rotated.svg]">{children}</figure>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={84}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "32%", bottom: "8%" }}
        rotation={-55.3}
        sizePercentage={{ height: 16.8 }}
      ></ResponsivePositionedBlob>
    </figure>
  );
}
