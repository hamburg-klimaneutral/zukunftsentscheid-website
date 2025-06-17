import Block from "@/app/_components/block";
import ContactForm from "@/app/(content)/kontakt/form";
import Hero from "@/app/_components/hero";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";

export default function ContactPage() {
  return (
    <main>
      <Block variant="green">
        <Hero>
          <h1>Kontakt</h1>
          <h2 className="h1">Schreibe uns eine Nachricht!</h2>
        </Hero>
      </Block>

      <Block>
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-green-neon"
        />
        <ContactForm />
      </Block>
    </main>
  );
}
