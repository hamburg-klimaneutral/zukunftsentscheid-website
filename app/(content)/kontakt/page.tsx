'use client'

import Block from "@/app/_components/block";
import ContactForm from "@/app/(content)/kontakt/form";
import PageHeading from "@/app/_components/page-heading";
import { GridIcon } from "@/app/_components/icon-grid";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [isSuccess, setIsSuccess] = useState(false)

    if (isSuccess) {
        return (
            <main>
                <Block variant="green">
                    <PageHeading heading="Vielen lieben Dank!" subheading="Kontakt" />
                </Block>
                <Block>
                    <GridIcon src="/icons/book-heart.svg" title="Abgeschickt!" className="max-w-xl">
                        Wir geben uns Mühe dein Anliegen so schnell wie es geht zu bearbeiten. Wenn du nicht so lange warten möchtest, schau dir an, wie du helfen kannst.
                        <Link href="/mitmachen" className="button primary mt-8">
                            Jetzt mitmachen
                        </Link>
                    </GridIcon>
                </Block>
            </main>
        )
    }


    return (
        <main>
            <Block variant="green">
                <PageHeading heading="Schreibe uns eine Nachricht!" subheading="Kontakt" />
            </Block>

            <Block>
                <ContactForm onSuccess={() => setIsSuccess(true)} />
            </Block>
        </main>
    )
}