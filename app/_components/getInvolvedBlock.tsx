import Link from "next/link";
import Block, { BlockProps } from "@/app/_components/block";

interface GetInvolvedBlockProps {
  variant?: BlockProps["variant"];
}

export default function GetInvolvedBlock({
  variant = "pinkLight",
}: GetInvolvedBlockProps) {
  return (
    <Block variant={variant}>
      <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
        <h2 className="h2 underline-4">
          Den Entscheid gewinnen wir nur gemeinsam:
          <br />
          Sei dabei!
        </h2>
        <p className="max-w-md">
          Komm zu einem unserer Infotreffen - jeden Mittwoch um 18:30 Uhr in der
          Kampstraße 15. Oder oder unterstütze uns bei Aktionen!
        </p>
        <Link className="button primary mt-4" href="/mitmachen">
          Mitmachen
        </Link>
      </div>
    </Block>
  );
}
