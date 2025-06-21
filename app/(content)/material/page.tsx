import Block from "@/app/_components/block";
import SectionBorderDecorationBlob33Header from "@/app/_components/blob-section-decorators/33-header";
import SectionBorderDecorationBlob43LeftBottom from "@/app/_components/blob-section-decorators/43-left-bottom";
import Link from "next/link";
import Image from "next/image";

const material = [
  {
    id: 1,
    name: "Bild für Social Media",
    image: "/ueber-uns/ueber_uns_patsy.jpg",
    file: "/ueber-uns/ueber_uns_patsy.jpg",
    description:
      "Dieses Bild kannst du für Social Media Posts verwenden, um auf den Hamburger Zukunftsentscheid aufmerksam zu machen.",
  },
  {
    id: 2,
    name: "Bild für Social Media",
    image: "/ueber-uns/ueber_uns_maik.jpg",
    file: "/ueber-uns/ueber_uns_maik.jpg",
    description:
      "Dieses Bild kannst du für Social Media Posts verwenden, um auf den Hamburger Zukunftsentscheid aufmerksam zu machen.",
  },
  {
    id: 3,
    name: "Flyer",
    image: "/ueber-uns/ueber_uns_luise.jpg",
    file: "/ueber-uns/ueber_uns_luise.jpg",
    description:
      "Den Flyer kannst du ausdrucken und verteilen, um auf den Hamburger Zukunftsentscheid aufmerksam zu machen.",
  },
];

export default function MaterialPage() {
  return (
    <main>
      <Block variant="green">
        <h1>
          Auf dieser Seite findest du Dateien zum Herunterladen, Teilen und
          Ausdrucken.
        </h1>
        <h2 className="h1 text-center">Material</h2>
      </Block>

      <Block>
        <SectionBorderDecorationBlob33Header
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-3">
          {material.map((file) => (
            <div key={file.id}>
              <Image
                src={file.image}
                alt={file.name}
                width={1707}
                height={2560}
                className="mx-auto mb-4 rounded-lg"
              />
              <p className="mb-2">
                <b>{file.name}</b>
                <br />
                {file.description}
              </p>
              <Link
                className="button secondary"
                href={file.file}
                download
                target="_blank"
              >
                Datei herunterladen
              </Link>
            </div>
          ))}
        </div>
        <SectionBorderDecorationBlob43LeftBottom
          firstBlobClassName="fill-blue-light"
          secondBlobClassName="fill-pink-light"
        />
      </Block>
    </main>
  );
}
