import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ImageBlob36Quote from "@/app/_components/blob-images/36-quote";

interface TextQuoteProps {
  imageSrc: React.ComponentProps<typeof Image>["src"];
  author: string;
  quote: string;
  blobClassName: string;
  quoteSignClassName: string;
  quoteRight?: boolean;
}

export default function BlockQuote({
  imageSrc,
  author,
  quote,
  blobClassName,
  quoteSignClassName,
  quoteRight = false,
}: TextQuoteProps) {
  return (
    <>
      <div
        className={twMerge(
          "flex w-full flex-col items-center justify-between gap-18 md:flex-row",
          !quoteRight && "gap-18 md:flex-row-reverse"
        )}
      >
        <figure
          className={twMerge(
            "relative max-w-70 md:w-1/3 md:max-w-md",
            !quoteRight && "md:-left-12",
            quoteRight && "md:-left-8 lg:-left-16 xl:-left-20"
          )}
        >
          <ImageBlob36Quote
            firstBlobClassName={blobClassName}
            secondBlobClassName={quoteSignClassName}
          >
            <Image src={imageSrc} placeholder="blur" alt={author} />
          </ImageBlob36Quote>
        </figure>

        <div
          className={twMerge(
            "flex basis-2/3 flex-col items-start gap-4 whitespace-pre-line"
          )}
        >
          <div className="space-y-4">
            <p className="font-bold">{author}</p>
            <blockquote className={"quote-big space-y-4"}>{quote}</blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
