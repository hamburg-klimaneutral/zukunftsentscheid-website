import GetInvolved from "@/app/_components/getInvolved";
import Block from "@/app/_components/block";

export default function PressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Block variant="pinkLight">
        <GetInvolved />
      </Block>
    </>
  );
}
