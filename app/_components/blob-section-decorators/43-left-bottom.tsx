import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob43LeftBottom({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute bottom-0 -left-42 aspect-square w-[350px] lg:-left-42 lg:w-[350px]">
      <ResponsivePositionedBlob
        id={43}
        sizePercentage={{ width: 100 }}
        mirror={true}
        rotation={-70}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={2}
        sizePercentage={{ width: 28 }}
        rotation={-70}
        mirror={true}
        position={{ top: "60%", right: "40%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
