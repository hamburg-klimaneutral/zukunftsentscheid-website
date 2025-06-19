import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob8LeftTop({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -top-75 -left-16 aspect-square w-[190px] lg:-left-26 lg:w-[340px]">
      <ResponsivePositionedBlob
        id={8}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
        rotation={270}
        mirror
      />
      <ResponsivePositionedBlob
        id={78}
        sizePercentage={{ width: 20 }}
        position={{ top: "85%", right: "55%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
