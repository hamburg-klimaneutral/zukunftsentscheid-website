'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { contactFormSchema, ContactFormSchema } from "@/app/actions/submit-contact-form-schema";
import { submitContactForm } from "@/app/actions/submit-contact-form";
import { twMerge } from "tailwind-merge";
import { clsx } from 'clsx'

interface ContactFormProps {
    onSuccess: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const form = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            // allow initially invalid value to force opt-in
            privacyAccepted: false as boolean as true,
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmitForm: SubmitHandler<ContactFormSchema> = async (data) => {
        await submitContactForm(data);
        onSuccess()
    };

    return (
        <form className="flex flex-col gap-8 w-xl max-w-full" onSubmit={handleSubmit(onSubmitForm)}>
            <div className={twMerge(clsx('flex flex-col gap-3 form-field', { 'error': errors.name }))}>
                <label className="text-tiny" htmlFor="contact-input-name">
                    Dein Name
                </label>
                <input
                    {...register('name')}
                    type="text"
                    id="contact-input-name"
                    placeholder="Vorname Nachname"
                />
                {errors.name && <span className="text-tiny text-error">{errors.name?.message}</span>}
            </div>

            <div className={twMerge(clsx('flex flex-col gap-3 form-field', { 'error': errors.email }))}>
                <label className="text-tiny" htmlFor="contact-input-email">
                    Deine E-Mail-Adresse
                </label>
                <input
                    {...register('email')}
                    type="email"
                    id="contact-input-email"
                    placeholder="name@mail.de"
                />
                {errors.email && <span className="text-tiny text-error">{errors.email?.message}</span>}
            </div>

            <div className={twMerge(clsx('flex flex-col gap-3 form-field', { 'error': errors.message }))}>
                <label className="text-tiny" htmlFor="contact-input-message">
                    Deine Nachricht
                </label>
                <textarea
                    {...register('message')}
                    id="contact-input-message"
                    rows={11}
                    placeholder="Du hast Fragen oder möchtest uns etwas sagen?"
                />
                {errors.message && <span className="text-tiny text-error">{errors.message?.message}</span>}
            </div>

            <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-row gap-3 items-center justify-center form-field">
                    <input
                        {...register('privacyAccepted')}
                        type="checkbox"
                        id="contact-input-privacy"
                        placeholder="Du hast Fragen oder möchtest uns etwas sagen?"
                    />
                    <label htmlFor="contact-input-privacy">
                        Ich akzeptiere die Bestimmungen zum <Link href="/datenschutz"
                            className="underline">Datenschutz</Link>
                    </label>
                </div>
                {errors.privacyAccepted && <span
                    className="text-tiny text-error">{errors.privacyAccepted?.message}</span>}
            </div>


            <button className="button primary self-center mt-7" type="submit">
                {/*TODO: redirect to success page or display error*/}
                Abschicken
            </button>
        </form>
    )
}