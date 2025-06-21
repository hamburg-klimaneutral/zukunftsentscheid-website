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
      <ResponsivePositionedBlob
        id={52}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "12%", bottom: "0%" }}
        mirror={true}
        sizePercentage={{ height: 103 }}
        rotation={-42}
      />
      <figure className="blob-[/blobs/45-rotated.svg]">{children}</figure>
      <ResponsivePositionedBlob
        id={84}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ right: "-2%", bottom: "58%" }}
        rotation={-40}
        mirror={true}
        sizePercentage={{ height: 12 }}
      ></ResponsivePositionedBlob>
    </figure>
  );
}
