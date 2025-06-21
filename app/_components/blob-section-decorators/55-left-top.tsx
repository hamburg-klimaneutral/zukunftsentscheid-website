import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob55LeftTop({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -top-80 -left-16 aspect-square w-[190px] lg:-left-65 lg:w-[500px]">
      <ResponsivePositionedBlob
        id={55}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
        mirror
      />
      <ResponsivePositionedBlob
        id={57}
        sizePercentage={{ width: 22 }}
        position={{ top: "20%", right: "18%" }}
        className={secondBlobClassName}
        rotation={-80}
      />
    </figure>
  );
}
