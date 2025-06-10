import GetInvolvedBlock from "@/app/_components/getInvolvedBlock";

export default function PressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <GetInvolvedBlock />
    </>
  );
}
