'use client'
import Script from "next/script";
import React from "react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TwingleWidgetProps {
    projectName: string
    projectId: string
}

const TWINGLE_BASE_URL = new URL('https://spenden.twingle.de/embed/hamburg-klimaneutral/')

function generateRandomTwingleId() {
    // Use the exact same ID format as in Twingle's code snippet.
    return '_' + Math.random().toString(36).substring(2, 11)
}

export default function TwingleWidget(
    {
        projectId,
        projectName,
        className,
        ...props
    }: React.ComponentProps<'div'> & TwingleWidgetProps) {

    const [id, setId] = useState<null | string>(null)

    // avoid hydration mismatch
    useEffect(() => {
        setId(generateRandomTwingleId());
    }, [])

    if (!id) {
        return null
    }

    const scriptSrc = new URL(TWINGLE_BASE_URL)
    scriptSrc.pathname += `${projectName}/${projectId}/widget/${id}`

    const containerId = `twingle-public-embed-${id}`

    return (
        <>
            <Script
                src={scriptSrc.href}
                strategy="lazyOnload"
                onLoad={() => {
                    document.querySelector(`#twingle-public-embed-${id} iframe`)?.setAttribute('title', 'Spenden Widget')
                }}
            />
            <div id={containerId} className={twMerge('w-full', className)}
                aria-label="Spenden Widget" {...props} />
        </>
    )
}
