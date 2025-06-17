import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob70RightCenter({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute top-25 -right-16 aspect-square w-[190px] lg:-right-30 lg:w-[350px]">
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
        sizePercentage={{ width: 34 }}
        rotation={90}
        position={{ top: "-17%", right: "26%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
