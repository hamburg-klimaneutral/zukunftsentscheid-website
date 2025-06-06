import Block from "@/app/components/block";
import ContactForm from "@/app/(content)/kontakt/form";

export default function ContactPage() {

    return (
        <main>
            <Block variant="green">
                Kontakt
                <h1 className="h1">Schreibe uns eine Nachricht!</h1>
            </Block>

            <Block>
                <ContactForm />
            </Block>
        </main>
    )
}