import TwingleWidget from "../twingle-widget";

export default function DonationPage() {
    return (
        <main>
            <section className="bg-green-dark text-white">
                <div className="container py-24">
                    Hello!
                </div>
            </section>

            <section>
                <div className="container py-24 flex flex-col sm:flex-row gap-12 justify-around items-center">
                    <div className="flex flex-col gap-6 sm:basis-[400px] items-start">
                        <h2 className="h2">Spenden</h2>
                        <p>
                            Der Hamburger Zukunftsentscheid wird ausschließlich durch Spenden
                            und Förderungen finanziert. Mit deiner Spende machst du ein
                            besseres Klimaschutzgesetz für Hamburg möglich!
                        </p>
                    </div>

                    {/* @TODO: use old project name to keep history */}
                    <TwingleWidget projectName="next-test-spenden" projectId="tw683f2bafdc6cb" className="sm:max-w-[450px]" />
                </div>
            </section>
        </main>
    )
}