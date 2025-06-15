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
      <div className="absolute top-[27%] left-[-7%] h-full w-[25%]">
        <ResponsivePositionedBlob
          id={70}
          sizePercentage={{ width: 100 }}
          rotation={-40}
          position={{ top: "0%", right: "0%" }}
          className="scale-x-[-1] fill-white"
        />
        <Image
          width={53}
          height={53}
          className="relative top-[7%] left-[25%] w-[45%]"
          src={iconSrc}
          alt=""
          aria-hidden
        />
      </div>
    </figure>
  );
}
