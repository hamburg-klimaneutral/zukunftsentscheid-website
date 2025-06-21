import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob65LeftTop({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -top-45 -left-16 aspect-square w-[190px] lg:-left-80 lg:w-[450px]">
      <ResponsivePositionedBlob
        id={65}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={23}
        sizePercentage={{ width: 15 }}
        position={{ top: "65%", right: "20%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
