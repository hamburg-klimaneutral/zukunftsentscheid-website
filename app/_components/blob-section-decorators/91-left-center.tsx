import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob91LeftCenter({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute top-[40%] -left-16 aspect-square w-[190px] lg:-left-30 lg:w-[350px]">
      <ResponsivePositionedBlob
        id={91}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={21}
        sizePercentage={{ width: 34 }}
        position={{ top: "-17%", right: "26%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
