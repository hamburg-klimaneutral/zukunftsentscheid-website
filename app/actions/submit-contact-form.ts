'use server'

import {contactFormSchema, ContactFormSchema} from "@/app/actions/submit-contact-form-schema";
import {sendPlainTextMail} from "@/app/actions/services/sendPlainTextMail";

export async function submitContactForm(data: ContactFormSchema) {
    const {name, email, message} = contactFormSchema.parse(data)

    await sendPlainTextMail({
        to: 'kontakt@zukunftsentscheid-hamburg.de',
        subject: `Neue Kontaktanfrage von ${name} <${email}>`,
        body: message,
        replyTo: {
            Name: name,
            Email: email,
        }
    })
}