import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { twMerge } from "tailwind-merge";
import { ImageBlobProps } from "@/app/_components/blob-images/type";

export default function ImageBlob88Rotated({
  children,
  firstBlobClassName,
  secondBlobClassName,
  secondBlobChildren,
  className,
}: ImageBlobProps) {
  return (
    <figure className={twMerge("relative", className)}>
      <ResponsivePositionedBlob
        id={42}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "45%", top: "-25%" }}
        sizePercentage={{ height: 130 }}
      />
      <figure className="blob-[/blobs/88-rotated.svg]">{children}</figure>
      <ResponsivePositionedBlob
        id={18}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "78%", bottom: "25%" }}
        rotation={-55.3}
        sizePercentage={{ height: 25 }}
      >
        {secondBlobChildren}
      </ResponsivePositionedBlob>
    </figure>
  );
}
