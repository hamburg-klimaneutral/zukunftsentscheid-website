import GetInvolved from "@/app/_components/getInvolved";
import Block from "@/app/_components/block";
import SectionBorderDecorationBlob43LeftTop from "@/app/_components/blob-section-decorators/43-left-top";

export default function PressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Block variant="pinkLight">
        <SectionBorderDecorationBlob43LeftTop
          firstBlobClassName="fill-white"
          secondBlobClassName="fill-green-neon"
        />
        <GetInvolved />
      </Block>
    </>
  );
}
