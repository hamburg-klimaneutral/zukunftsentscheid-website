import TwingleWidget from "../twingle-widget";

export default function DonationPage() {
    return (
        <main>
            <section className="bg-green-dark py-12">
                <div className="container py-24">
                    Hello!
                </div>
            </section>
            <section>
                <div className="container py-24">
                {/* @TODO: use old project name to keep history */}
                    <TwingleWidget projectName="next-test-spenden" projectId="tw683f2bafdc6cb" />
                </div>
            </section>
        </main>
    )
}