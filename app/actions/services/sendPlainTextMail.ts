import { cache } from 'react'
import assert from 'node:assert'
import type { SendEmailV3_1 } from 'node-mailjet'
import MailJet from 'node-mailjet'
import { CONTACT_MAIL_ADDRESS, CONTACT_MAIL_NAME } from "@/app/config";

const { DIVERT_MAILS_TO_LOG = 'false', MAILJET_API_KEY, MAILJET_SECRET_KEY } = process.env

const MAIL_FROM: SendEmailV3_1.Message['From'] = {
    Email: CONTACT_MAIL_ADDRESS,
    Name: CONTACT_MAIL_NAME,
}

const getClient = cache(() => {
    assert(MAILJET_API_KEY, 'MAILJET_API_KEY not defined')
    assert(MAILJET_SECRET_KEY, 'MAILJET_SECRET_KEY not defined')

    return new MailJet.Client({
        apiKey: MAILJET_API_KEY,
        apiSecret: MAILJET_SECRET_KEY,
    })
})

export async function sendPlainTextMail(
    {
        to,
        subject,
        body,
        replyTo,
    }: {
        to: string
        subject: string
        body: string
        replyTo?: SendEmailV3_1.Message['ReplyTo']
    }) {

    if (DIVERT_MAILS_TO_LOG === 'true') {
        console.info('diverting mail to log', {
            to, subject, body, replyTo,
        })
        return
    }

    const request: SendEmailV3_1.Body = {
        Messages: [
            {
                From: MAIL_FROM,
                ReplyTo: replyTo,
                To: [
                    {
                        Email: to,
                    },
                ],
                Subject: subject,
                Variables: {},
                TextPart: body,
            },
        ],
    }

    return getClient().post('send', { version: 'v3.1' }).request(request)
}