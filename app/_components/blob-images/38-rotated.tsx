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
      <ResponsivePositionedBlob
        id={40}
        className={firstBlobClassName}
        position={{ left: "20%", top: "-10%" }}
        sizePercentage={{ height: 110 }}
        mirror={true}
        rotation={-43}
      />
      <figure className="blob-[/blobs/38-rotated.svg]">{children}</figure>
      <ResponsivePositionedBlob
        id={56}
        mirror={true}
        className={secondBlobClassName}
        position={{ right: "-16%", bottom: "68%" }}
        rotation={-42}
        sizePercentage={{ height: 12 }}
      ></ResponsivePositionedBlob>
    </figure>
  );
}
