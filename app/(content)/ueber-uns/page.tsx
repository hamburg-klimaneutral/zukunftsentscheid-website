import Block from "@/app/_components/block";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import SectionBorderDecorationBlob43LeftBottom from "@/app/_components/blob-section-decorators/43-left-bottom";
import Link from "next/link";
import Image from "next/image";

export default function AblaufPage() {
  return (
    <main>
      <Block variant="green">
        <h1>Das sind wir.</h1>
        <h2 className="h1 text-center">Gemeinsam für eine bessere Politik</h2>
      </Block>

      <Block>
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p>
            Der Hamburger Zukunftsentscheid besteht schon heute aus über{" "}
            <b>300 Ehrenamtlichen</b>. Denn es gibt viel zu tun: Es müssen zum
            Beispiel Unterschriften gesammelt, Social-Media Kanäle gepflegt und
            Presseanfragen beantwortet werden. Einige von uns kannst du auf
            dieser Seite kennenlernen.{" "}
            <b>
              Für einen erfolgreichen Volksentscheid brauchen wir aber auch
              deine Hilfe
            </b>
            .
          </p>
        </div>
        <Link className="button primary" href="/mitmachen">
          Jetzt mitmachen!
        </Link>
      </Block>

      <Block>
        <SectionBorderDecorationBlob43LeftBottom
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/ueber-uns/ueber_uns_patsy.jpg"
              alt="Patsy"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Patsy</b> studiert Friedens- und Sicherheitsforschung im Master
              und ist seit 2019 bei Fridays for Future aktiv. Beim
              Zukunftsentscheid koordiniert sie die Presse- und Bündnisarbeit
              und verantwortet das Fundraising.
            </p>
          </div>

          <div>
            <Image
              src="/ueber-uns/ueber_uns_maik.jpg"
              alt="Maik"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Maik</b> ist Beamter und für die hamburgweite Lokalvernetzung
              der Sammler*innen verantwortlich. Weiterhin unterstützt er
              maßgeblich den Aufbau unserer internen Strukturen. In Eimsbüttel
              versorgt euch Maik mit Materialien vom Flyer bis zu
              Unterschriftenlisten.
            </p>
          </div>

          <div>
            <Image
              src="/ueber-uns/ueber_uns_luise.jpg"
              alt="Luise"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Luise</b> arbeitet bei der Beiersdorf AG im Marketing und
              Vertrieb. Beim Zukunftsentscheid verantwortet sie die öffentliche
              Kommunikation sowie das Marketing. Als Vertrauensperson ist sie
              darüber hinaus für die Kommunikation mit den Behörden zuständig.
            </p>
          </div>

          <div>
            <Image
              src="/ueber-uns/ueber_uns_johannes.jpg"
              alt="Johannes"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Johannes</b> arbeitet in der Softwareentwicklung und
              unterstützt den Zukunftsentscheid mit digitaler Infrastruktur. Er
              hat den Gesetzestext mitentwickelt und nimmt an den Verhandlungen
              mit der Politik teil.
            </p>
          </div>

          <div>
            <Image
              src="/ueber-uns/ueber_uns_lou.jpg"
              alt="Lou"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Lou</b> ist neben ihrem Jurastudium Vertrauensperson und
              Pressesprecherin für den Zukunftsentscheid. Darüber hinaus
              organisiert sie die Kommunikation innerhalb unseres Bündnisses und
              nimmt an den Verhandlungen mit der Politik teil.
            </p>
          </div>

          <div>
            <Image
              src="/ueber-uns/ueber_uns_annika.jpg"
              alt="Annika"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Annika</b> ist neben ihrem Studium der Politikwissenschaften
              seit 2019 bei Fridays for Future aktiv. Sie ist im Vorstand
              unseres Trägervereins Hamburg Klimaneutral e.V. und verantwortet
              die Finanzen und Social Media.
            </p>
          </div>

          <div>
            <Image
              src="/ueber-uns/ueber_uns_wolfgang.jpg"
              alt="Wolfgang"
              width={1707}
              height={2560}
              className="mx-auto mb-4 rounded-lg"
            />
            <p>
              <b>Wolfgang</b> ist Physiker und seit einigen Jahren bei
              Greenpeace und der Gemeinwohl-Ökonomie aktiv. Er koordiniert
              Sammelaktionen im Bezirk Nord und ist für die Kommunikation zu den
              Ehrenamtlichen von diversen NGOs zuständig.
            </p>
          </div>
        </div>
      </Block>
    </main>
  );
}
