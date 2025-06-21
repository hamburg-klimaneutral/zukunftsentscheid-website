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
      <ResponsivePositionedBlob
        id={70}
        className={twMerge("absolute", firstBlobClassName)}
        position={{ left: "32%", bottom: "3%" }}
        sizePercentage={{ height: 101 }}
      />
      <figure className="blob-[/blobs/36.svg]">{children}</figure>
      <figure
        className={twMerge(
          "absolute right-[-16%] bottom-[19%] w-[14%]",
          secondBlobClassName
        )}
      >
        <SvgQuote viewBox="0 0 43 46" width="100%" height={undefined} />
      </figure>
    </figure>
  );
}
