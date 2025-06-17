import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ImageBlob36Quote from "@/app/_components/blob-images/36-quote";

interface TextQuoteProps {
  imageSrc: React.ComponentProps<typeof Image>["src"];
  author: string;
  quote: string;
  className?: string;
  blobClassName: string;
  quoteSignClassName: string;
}

export default function BlockQuote({
  imageSrc,
  author,
  quote,
  className,
  blobClassName,
  quoteSignClassName,
}: TextQuoteProps) {
  return (
    <>
      <div
        className={twMerge(
          "flex w-full flex-col items-center justify-between gap-18 md:flex-row",
          className
        )}
      >
        <figure className="max-w-xs min-w-1/4 basis-1/2">
          <ImageBlob36Quote
            firstBlobClassName={blobClassName}
            secondBlobClassName={quoteSignClassName}
          >
            <Image src={imageSrc} placeholder="blur" alt={author} />
          </ImageBlob36Quote>
        </figure>

        <div
          className={twMerge(
            "relative flex flex-col items-start gap-4 whitespace-pre-line"
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
