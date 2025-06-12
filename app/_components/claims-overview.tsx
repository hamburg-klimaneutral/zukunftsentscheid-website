import IconGrid, { GridIcon } from "@/app/_components/icon-grid";
import Image from "next/image";
import Link from "next/link";

export default function ClaimsOverview({
  activeSlug,
}: {
  activeSlug?: string;
}) {
  function ActiveItemIndicatorOrMoreLink({ slug }: { slug: string }) {
    if (slug === activeSlug)
      return (
        <div className="relative right-1/4 flex items-end gap-4">
          <strong className="text-pink-dark -mb-2">Hier bist du</strong>
          <Image
            src="/shapes/arrow.png"
            alt=""
            width={58.47}
            height={58.92}
            aria-hidden
          />
        </div>
      );

    return (
      <Link href={`/forderungen/${slug}`} className="button">
        mehr dazu
      </Link>
    );
  }

  return (
    <IconGrid>
      <GridIcon
        blobId={66}
        src="/icons/check.svg"
        title="Sozialverträglichkeit"
      >
        Fairer Klimaschutz,{"\n"}
        der für alle bezahlbar bleibt.
        <ActiveItemIndicatorOrMoreLink slug="sozialvertraeglichkeit" />
      </GridIcon>
      <GridIcon blobId={70} src="/icons/clock.svg" title="Jährliche Ziele">
        Planbarkeit und Transparenz{"\n"}
        für Menschen und Wirtschaft.
        <ActiveItemIndicatorOrMoreLink slug="jaehrliche-ziele" />
      </GridIcon>
      <GridIcon
        blobId={3}
        src="/icons/muscle.svg"
        title="Klimaneutralität 2040"
      >
        Ein verantwortungsvoller und{"\n"}
        wettbewerbsfähiger Beitrag unserer Stadt.
        <ActiveItemIndicatorOrMoreLink slug="2040-klimaneutral" />
      </GridIcon>
    </IconGrid>
  );
}
