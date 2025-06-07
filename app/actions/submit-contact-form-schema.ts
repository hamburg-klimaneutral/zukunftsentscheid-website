import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string({ message: "Pflichtfeld" })
        .min(1, "Pflichtfeld"),
    email: z
        .string({ message: "Pflichtfeld" })
        .min(1, { message: "Pflichtfeld" }).email("Keine gültige E-Mail"),
    message: z
        .string({ message: "Pflichtfeld" })
        .min(1, "Pflichtfeld"),
    privacyAccepted: z.literal(true, {
        errorMap: () => ({
            message: "Die Datenschutzbestimmungen müssen akzeptiert werden."
        })
    }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>