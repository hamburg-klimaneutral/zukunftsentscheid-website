import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob70RightCenter({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute top-15 -right-68 aspect-square w-[350px] lg:-right-68 lg:w-[350px]">
      <ResponsivePositionedBlob
        id={70}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={75}
        sizePercentage={{ width: 22 }}
        rotation={210}
        position={{ top: "0%", right: "70%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
