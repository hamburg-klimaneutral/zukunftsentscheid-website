import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { twMerge } from "tailwind-merge";
import { ImageBlobProps } from "@/app/_components/blob-images/type";

export default function ImageBlob38Rotated({
  children,
  firstBlobClassName,
  secondBlobClassName,
  className,
}: ImageBlobProps) {
  return (
    <figure className={twMerge("relative", className)}>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={40}
        className={firstBlobClassName}
        position={{ left: "28%", top: "-15%" }}
        sizePercentage={{ height: 90 }}
        rotation={135}
      />
      <figure className="blob-[/blobs/38-rotated.svg]">{children}</figure>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={84}
        className={secondBlobClassName}
        position={{ left: "110%", bottom: "68%" }}
        rotation={-55.3}
        sizePercentage={{ height: 12 }}
      ></ResponsivePositionedBlob>
    </figure>
  );
}
