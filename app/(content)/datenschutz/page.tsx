import Block from "@/app/_components/block";
import Content from "./content";

export default function PrivacyPage() {
  return (
    <>
      <Block variant="green">
        <h1 className="h1">Datenschutzerklärung</h1>
      </Block>

      <Block className="max-w-xl">
        <Content />
      </Block>
    </>
  );
}
