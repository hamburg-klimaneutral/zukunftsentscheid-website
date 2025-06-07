'use server'

import { contactFormSchema, ContactFormSchema } from "@/app/actions/submit-contact-form-schema";
import { sendPlainTextMail } from "@/app/actions/services/sendPlainTextMail";
import { CONTACT_MAIL_ADDRESS, CONTACT_MAIL_NAME } from "@/app/config";

export async function submitContactForm(data: ContactFormSchema) {
    const { name, email, message } = contactFormSchema.parse(data)

    await sendPlainTextMail({
        to: CONTACT_MAIL_ADDRESS,
        subject: `Neue Kontaktanfrage von ${name} <${email}>`,
        body: message,
        replyTo: {
            Name: name,
            Email: email,
        }
    })

    await sendPlainTextMail({
        to: email,
        subject: `Danke für Deine Nachricht!`,
        body: `Wir haben deine Nachricht erhalten und melden uns so bald wie möglich bei Dir zurück.


Deine Nachricht: 
        
${message}`,
        replyTo: {
            Name: CONTACT_MAIL_NAME,
            Email: CONTACT_MAIL_ADDRESS,
        }
    })
}