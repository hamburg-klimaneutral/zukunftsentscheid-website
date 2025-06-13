import { twMerge } from "tailwind-merge";
import Image from "next/image";
import SignatureImage from "@/app/_pictures/unterschriften.png";

interface TextQuoteProps {
  author: string;
  quote: string;
  className?: string;
}

export default function BlockQuote({
  author,
  quote,
  className,
}: TextQuoteProps) {
  return (
    <>
      <div
        className={twMerge(
          "flex w-full flex-col items-center justify-between gap-18 md:flex-row",
          className
        )}
      >
        <figure className="relative max-w-xs min-w-1/4 basis-1/2">
          <figure className="blob-[/blobs/36.svg]">
            <Image src={SignatureImage} placeholder="blur" alt={author} />
          </figure>
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
