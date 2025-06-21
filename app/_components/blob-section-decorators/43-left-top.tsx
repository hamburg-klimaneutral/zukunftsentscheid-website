import { SectionBorderDecorationBlobProps } from "@/app/_components/blob-section-decorators/type";
import SectionBorderDecorationBlob43LeftBottom from "@/app/_components/blob-section-decorators/43-left-bottom";

export default function SectionBorderDecorationBlob43LeftTop(
  props: SectionBorderDecorationBlobProps
) {
  return (
    <figure className="absolute -bottom-[25%]">
      <SectionBorderDecorationBlob43LeftBottom {...props} />
    </figure>
  );
}
