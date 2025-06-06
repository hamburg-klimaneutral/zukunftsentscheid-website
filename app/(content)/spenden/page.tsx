import TwingleWidget from "@/app/components/twingle-widget";
import Block from "@/app/components/block";

export default function DonationPage() {
    return (
        <main>
            <section className="bg-green-dark text-white">
                <div className="container py-24">
                    Spenden
                    <h1 className="h1">Mache mit deiner Spende ein besseres Klimaschutzgesetz für Hamburg möglich!</h1>
                </div>
            </section>

            <section>
                <div className="container py-24 flex flex-col sm:flex-row gap-12 justify-around items-center">
                    {/* @TODO: use old project name to keep history */}
                    <TwingleWidget projectName="next-test-spenden" projectId="tw683f2bafdc6cb"
                                   className="sm:max-w-[450px]"/>

                    <div className="flex flex-col gap-6 sm:basis-[400px] items-start">
                        <p>
                            Der Hamburger Zukunftsentscheid wird ausschließlich durch Spenden und Förderungen
                            finanziert. Deine Spende zählt!
                        </p>
                        <p>
                            Die Spenden verwaltet der Verein „Hamburg Klimaneutral e.V.“. Der Verein ist vom Finanzamt
                            Hamburg Nord als gemeinnützig anerkannt und kann Spendenbescheinigungen ausstellen. Schreibe
                            einfach deine Adresse mit in die Überweisung oder aktiviere die Spendenbescheinigung im
                            Formular
                            oben.
                        </p>
                        <p>
                            Gerne gehen wir auch auf Wünsche ein oder beantworten Fragen: <a
                            href="mailto:spenden@hamburg-klimaneutral.de" className="underline" target="_blank">
                            spenden@hamburg-klimaneutral.de
                        </a>
                        </p>
                    </div>
                </div>
            </section>

            <Block variant="green">
                <div className="space-y-6 max-w-xl self-start">
                    <p className="font-bold pb-2">Kann ich auch per Überweisung spenden?</p>
                    <p>
                        Spenden können auch an folgendes Bankkonto überwiesen werden:
                    </p>
                    <p>
                        IBAN: DE44 4306 0967 1311 9000 00
                        <br/>
                        BIC: GENODEM1GLS
                    </p>
                </div>

                <div className="space-y-6 max-w-xl self-start">
                    <p className="font-bold pb-2">Was machen wir mit den Spenden?</p>
                    <p>
                        Ein Großteil der Kosten entsteht durch Arbeitsmaterialien für das Sammeln der
                        Unterschriften: Klemmbretter, Kugelschreiber, Druck von Unterschriftenlisten – aber auch
                        Fahnen und Westen, um auf unsere Sammler*innen aufmerksam zu machen.
                    </p>
                    <p>
                        Um Menschen von unseren Zielen zu überzeugen, müssen wir aber zum Beispiel auch in
                        Mobilisierung investieren: Plakate, Flyer, diese Website oder andere Wege, um die Menschen
                        in Hamburg zu erreichen.
                    </p>
                    <p>
                        Wir alle arbeiten ehrenamtlich, sodass nur ein sehr geringer Teil der Spendengelder in
                        Verwaltung fließt.
                    </p>
                </div>

                <div className="space-y-6 max-w-xl self-start">
                    <p className="font-bold pb-2">Woher kommt das Geld?</p>

                    <p>
                        Der Hamburger Zukunftsentscheid finanziert sich durch Spenden und Förderungen. Das Geld
                        kommt von verschiedenen Spender*innen, die uns entweder regelmäßig oder zu bestimmten
                        Anlässen spenden.
                    </p>

                    <p>
                        Zu unseren Spender*innen gehören Einzelpersonen, aber auch Organisationen, Vereine,
                        Stiftungen und Unternehmen.
                    </p>
                </div>
            </Block>
        </main>
    )
}