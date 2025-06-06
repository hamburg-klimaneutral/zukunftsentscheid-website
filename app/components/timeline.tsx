import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Timeline() {
  return (
    <ul className="flex flex-col gap-20">
      <TimelineItem completed title="Volksinitiative">
        <strong>Vorgabe:</strong> 10.000 Unterschriften in 6 Monaten
        <br />
        <strong>Ergebnis:</strong> 23.316 Unterschriften in 4 Wochen
      </TimelineItem>
      <TimelineItem completed title="Volksbegehren">
        <strong>Vorgabe:</strong> 65.835 Unterschriften
        <br />
        <strong>Ergebnis:</strong> 106.374 Unterschriften nach 3 Wochen
      </TimelineItem>
      <TimelineItem title="Volksentscheid">
        <strong>Vorgabe:</strong> Die Mehrheit der Hamburgerinnen und
        Hamburger, die zur Bürgerschaft wahlberechtigt sind, stimmt dafür.
        Stimmt die Mehrheit für den Gesetzestext, tritt er innerhalb eines
        Monats in Kraft.
      </TimelineItem>
    </ul>
  )
}

function TimelineItem({
  title,
  completed,
  children,
}: {
  title: string;
  completed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-6 group">
      <figure className="flex flex-col items-center relative shrink-0">
        <div className={twMerge('absolute top-1 h-12 w-1.5 -mt-12 group-first:hidden', completed ? 'bg-green-dark' : 'bg-blue-light')} />
        <Image
          src={completed ? "/icons/timeline-check.svg" : "/icons/timeline-exclamation.svg"}
          width={47}
          height={47}
          alt=""
          aria-hidden
        />
        {completed && <div className="flex-1 w-1.5 -mt-1 -mb-11 bg-green-dark group-last:hidden" />}
      </figure>
      <div className="flex flex-col gap-2">
        <h3 className="h3">{title}</h3>
        <p className="max-w-[400px]">
          {children}
        </p>
      </div>
    </li>
  );
}
