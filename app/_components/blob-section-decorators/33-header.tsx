import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob33Header({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -top-55 -right-16 aspect-square w-[190px] lg:-right-30 lg:w-[320px]">
      <ResponsivePositionedBlob
        id={33}
        sizePercentage={{ width: 100 }}
        rotation={-70}
        mirror={true}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={38}
        sizePercentage={{ width: 25 }}
        rotation={90}
        position={{ top: "80%", right: "25%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
