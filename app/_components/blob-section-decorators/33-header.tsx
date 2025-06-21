import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";

export default function SectionBorderDecorationBlob33Header({
  firstBlobClassName,
  secondBlobClassName,
}: SectionBorderDecorationBlobProps) {
  return (
    <figure className="absolute -top-70 -right-16 aspect-square w-[190px] lg:-right-40 lg:w-[360px]">
      <ResponsivePositionedBlob
        id={33}
        sizePercentage={{ width: 100 }}
        rotation={-82}
        mirror={true}
        position={{ top: "0%", right: "0%" }}
        className={firstBlobClassName}
      />
      <ResponsivePositionedBlob
        id={38}
        sizePercentage={{ width: 25 }}
        rotation={80}
        position={{ top: "78%", right: "32%" }}
        className={secondBlobClassName}
      />
    </figure>
  );
}
