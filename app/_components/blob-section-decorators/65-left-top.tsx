import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob65LeftTop({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -top-35 -left-16 aspect-square w-[190px] lg:-left-105 lg:w-[650px]">
      <ResponsivePositionedBlob
        id={65}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={23}
        sizePercentage={{ width: 12 }}
        position={{ top: "67%", right: "20%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
