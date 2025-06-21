import Block from "@/app/_components/block";
import Hero from "@/app/_components/hero";

export default function EhrenamtPage() {
  return (
    <>
      <Block variant="green">
        <Hero asset={<></>}>
          <h1>Ehrenamt</h1>
          <h2 className="h1">
            Endlich verbindlicher Klimaschutz.
            <br />
            Nimm es selbst in die Hand.
          </h2>
        </Hero>
      </Block>
      <Block>
        <p>
          Mit unserem Volksentscheid nehmen wir verbindlichen Klimaschutz für
          Hamburg endlich selbst in die Hand. Uns fehlt nur noch ein letzter
          Schritt – bei unserem Volksentscheid mindestens 265.000
          Hamburger*innen von uns überzeugen.
        </p>
        <p>
          Genau hier kannst DU den Unterschied machen. Du bist Texter*in,
          Arter*in oder Graphik Designer*in? Du bist Social Media Manager*in,
          Marketeer oder Kommunikations-Stratege? Und du möchtest deine
          Fähigkeiten endlich für etwas einsetzen, was sich nicht nur richtig
          gut anfühlt, sondern auch direkt wirksam ist?
        </p>
        <p>
          Komm zu uns ins Team, es gibt mit Sicherheit das Richtige für dich!
        </p>
      </Block>
    </>
  );
}
