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
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={42}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "-18%", top: "20%" }}
        sizePercentage={{ height: 81 }}
      />
      <figure className="blob-[/blobs/88-rotated.svg]">{children}</figure>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={18}
        className={twMerge("absolute", secondBlobClassName)}
        position={{ left: "32%", bottom: "8%" }}
        rotation={-55.3}
        sizePercentage={{ height: 16.8 }}
      >
        {secondBlobChildren}
      </ResponsivePositionedBlob>
    </figure>
  );
}
