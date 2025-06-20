import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob43LeftBottom({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute bottom-35 -left-16 aspect-square w-[190px] lg:-left-220 lg:w-[350px]">
      <ResponsivePositionedBlob
        id={43}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={2}
        sizePercentage={{ width: 28 }}
        position={{ top: "85%", right: "56%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
