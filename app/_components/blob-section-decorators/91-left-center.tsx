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
        sizePercentage={{ width: 140 }}
        position={{ top: "0%", right: "20%" }}
        className={firstBlobClassName}
        rotation={140}
      />
      <ResponsivePositionedBlob
        id={21}
        sizePercentage={{ width: 18 }}
        position={{ top: "8%", right: "50%" }}
        className={secondBlobClassName}
        rotation={130}
      />
    </figure>
  );
}
