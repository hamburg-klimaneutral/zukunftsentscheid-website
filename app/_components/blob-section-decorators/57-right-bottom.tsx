import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob57RightBottom({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -right-16 -bottom-15 aspect-square w-[190px] lg:-right-55 lg:w-[330px]">
      <ResponsivePositionedBlob
        id={57}
        sizePercentage={{ width: 100 }}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={10}
        sizePercentage={{ width: 25 }}
        position={{ top: "-5%", right: "64%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
