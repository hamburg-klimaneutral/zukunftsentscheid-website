import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { twMerge } from "tailwind-merge";
import { ImageBlobProps } from "@/app/_components/blob-images/type";
import SvgQuote from "@/app/_svg/quote";

export default function ImageBlob36Quote({
  children,
  firstBlobClassName,
  secondBlobClassName,
  className,
}: ImageBlobProps) {
  return (
    <figure className={twMerge("relative", className)}>
      {/* TODO: position blob */}
      <ResponsivePositionedBlob
        id={70}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "25%", top: "-12%" }}
        sizePercentage={{ height: 85 }}
        rotation={5}
      />
      <figure className="blob-[/blobs/36.svg]">{children}</figure>
      {/* TODO: position image */}
      <figure
        className={twMerge(
          "relative -top-37 left-80 w-[30%]",
          secondBlobClassName
        )}
      >
        <SvgQuote viewBox="0 0 43 46" />
      </figure>
    </figure>
  );
}
