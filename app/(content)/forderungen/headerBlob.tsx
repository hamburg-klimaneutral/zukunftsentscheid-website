import ResponsivePositionedBlob from "@/app/_components/responsive-positioned-blob";
import Image from "next/image";

export default function ForderungenSubpageHeaderBlob({
  iconSrc,
}: {
  iconSrc: string;
}) {
  return (
    <figure className="absolute right-[-230px] bottom-[-60px] aspect-square w-[270px] sm:right-[-350px] sm:bottom-[-135px] sm:w-[480px] lg:right-[-260px]">
      <ResponsivePositionedBlob
        id={84}
        sizePercentage={{ width: 100 }}
        rotation={65}
        position={{ top: "0%", left: "0%" }}
        className="fill-pink-light scale-x-[-1]"
      />

      <ResponsivePositionedBlob
        id={70}
        sizePercentage={{ width: 25 }}
        rotation={-40}
        mirror
        position={{ top: "26%", left: "-10%" }}
        className="fill-white"
      >
        <Image
          width={53}
          height={53}
          className="absolute top-[28%] left-[28%] w-[45%]"
          src={iconSrc}
          alt=""
          aria-hidden
        />
      </ResponsivePositionedBlob>
    </figure>
  );
}
