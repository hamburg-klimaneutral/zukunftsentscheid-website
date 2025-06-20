import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob70RightCenter({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute top-15 -right-16 aspect-square w-[190px] lg:-right-50 lg:w-[350px]">
      <ResponsivePositionedBlob
        id={70}
        sizePercentage={{ width: 100 }}
        rotation={-50}
        mirror={true}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={75}
        sizePercentage={{ width: 28 }}
        rotation={180}
        position={{ top: "0%", right: "60%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
