import TwingleWidget from "../twingle-widget";

export default function DonationPage() {
    return (
        <main>
            <section className="bg-blue-light py-12">
                {/* @TODO: use old project name to keep history */}
                <TwingleWidget projectName="next-test-spenden" projectId="tw683f2bafdc6cb" />
            </section>
        </main>
    )
}