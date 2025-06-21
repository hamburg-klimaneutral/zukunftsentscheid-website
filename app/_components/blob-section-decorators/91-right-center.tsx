import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob91RightCenter({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute top-[40%] -right-16 aspect-square w-[190px] lg:-right-100 lg:w-[550px]">
      <ResponsivePositionedBlob
        id={91}
        sizePercentage={{ width: 100 }}
        position={{ top: "-40%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={21}
        sizePercentage={{ width: 12 }}
        position={{ top: "19%", right: "82%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
