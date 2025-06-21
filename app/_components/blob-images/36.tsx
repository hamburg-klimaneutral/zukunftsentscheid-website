import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { twMerge } from "tailwind-merge";
import { ImageBlobProps } from "@/app/_components/blob-images/type";

export default function ImageBlob36({
  children,
  firstBlobClassName,
  secondBlobClassName,
  className,
}: ImageBlobProps) {
  return (
    <figure className={twMerge("relative", className)}>
      <ResponsivePositionedBlob
        id={70}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "-20%", top: "0%" }}
        sizePercentage={{ height: 100 }}
      />
      <figure className="blob-[/blobs/36.svg]">{children}</figure>
      <ResponsivePositionedBlob
        id={96}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "22%", bottom: "18%" }}
        rotation={-55.3}
        sizePercentage={{ height: 20 }}
      />
    </figure>
  );
}
