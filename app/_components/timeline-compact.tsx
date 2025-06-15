import Timeline from "@/app/_components/timeline";

export default function CompactTimeline() {
  return (
    <Timeline.Root>
      <Timeline.Item completed title="Volksinitiative">
        <p className="max-w-[400px]">
          <strong>Vorgabe:</strong> 10.000 Unterschriften in 6 Monaten
          <br />
          <strong>Ergebnis:</strong> 23.316 Unterschriften in 4 Wochen
        </p>
      </Timeline.Item>
      <Timeline.Item completed title="Volksbegehren">
        <p className="max-w-[400px]">
          <strong>Vorgabe:</strong> 65.835 Unterschriften
          <br />
          <strong>Ergebnis:</strong> 106.374 Unterschriften nach 3 Wochen
        </p>
      </Timeline.Item>
      <Timeline.Item title="Volksentscheid">
        <p className="max-w-[400px]">
          <strong>Vorgabe:</strong> Die Mehrheit der Hamburgerinnen und
          Hamburger, die zur Bürgerschaft wahlberechtigt sind, stimmt dafür.
          Stimmt die Mehrheit für den Gesetzestext, tritt er innerhalb eines
          Monats in Kraft.
        </p>
      </Timeline.Item>
    </Timeline.Root>
  );
}
