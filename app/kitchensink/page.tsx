import Image from "next/image";
import Hero from "@/app/_components/hero";
import HeroImage from "@/app/_pictures/12.10.png";
import Block from "@/app/_components/block";

export default function KitchenSinkPage() {
  return (
    <div className="m-auto flex max-w-5xl flex-col gap-20 p-4 sm:mt-8">
      <section className="prose flex flex-col gap-4">
        <h1>Prose</h1>
        <p className="text-base sm:text-lg">Für Fließtexte</p>

        <h1>H1: Besseres Klimaschutzgesetz</h1>
        <h2>H2: Besseres Klimaschutzgesetz</h2>
        <h3>H3: Besseres Klimaschutzgesetz</h3>
        <p>
          Body: Lorem Ipsum dolor <strong>strong</strong> sit amet
        </p>
        <small>
          Tiny Body: Lorem Ipsum dolor <strong>strong</strong> sit amet
        </small>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="h1">Menu and Buttons</h1>
        <ul className="flex gap-1">
          <li className="text-menu-item">Menu Item</li>
          <li className="text-menu-item font-semibold">Menu Item</li>
          <li className="text-menu-item">Menu Item</li>
        </ul>
        <div className="flex gap-2">
          <a href="#" className="button">
            Button
          </a>
          <a href="#" className="button primary">
            Primary Button
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="h1">Colors</h1>
        <h2 className="h2">Brand Colors</h2>
        <ul className="my-5 grid grid-cols-4 gap-4 md:grid-cols-8">
          <li className="flex flex-col items-center gap-1">
            <div className="bg-pink-dark h-24 w-24 rounded-full"></div>
            <span className="font-semibold">pink-dark</span>
            <span className="text-tiny">#cc0070</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-green-dark h-24 w-24 rounded-full"></div>
            <span className="font-semibold">green-dark</span>
            <span className="text-tiny">#235753</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-blue-light h-24 w-24 rounded-full"></div>
            <span className="font-semibold">blue-light</span>
            <span className="text-tiny">#a9d8d8</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-pink-light h-24 w-24 rounded-full"></div>
            <span className="font-semibold">pink-light</span>
            <span className="text-tiny">#f5cde2</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-green-neon h-24 w-24 rounded-full"></div>
            <span className="font-semibold">green-neon</span>
            <span className="text-tiny">#c8ff00</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="h-24 w-24 rounded-full border border-gray-200 bg-white"></div>
            <span className="font-semibold">white</span>
            <span className="text-tiny">#ffffff</span>
          </li>
        </ul>

        <h2 className="h2">Utility Colors</h2>
        <ul className="my-5 grid grid-cols-4 gap-4 md:grid-cols-8">
          <li className="flex flex-col items-center gap-1">
            <div className="bg-pink-dark-80 h-24 w-24 rounded-full"></div>
            <span className="font-semibold">pink-dark-80</span>
            <span className="text-tiny">#e43997</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-green-dark-80 h-24 w-24 rounded-full"></div>
            <span className="font-semibold">green-dark-80</span>
            <span className="text-tiny">#40827d</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-blue-light-80 h-24 w-24 rounded-full"></div>
            <span className="font-semibold">blue-light-80</span>
            <span className="text-tiny">#c8f7f7</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-green-neon-80 h-24 w-24 rounded-full"></div>
            <span className="font-semibold">green-neon-80</span>
            <span className="text-tiny">#e5ff89</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-focus h-24 w-24 rounded-full"></div>
            <span className="font-semibold">focus</span>
            <span className="text-tiny">#539eff</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-grey h-24 w-24 rounded-full"></div>
            <span className="font-semibold">grey</span>
            <span className="text-tiny">#b8b8b8</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-error h-24 w-24 rounded-full"></div>
            <span className="font-semibold">error</span>
            <span className="text-tiny">#de252e</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <div className="bg-success h-24 w-24 rounded-full"></div>
            <span className="font-semibold">success</span>
            <span className="text-tiny">#49c654</span>
          </li>
        </ul>
      </section>

      <section>
        <h1 className="h1">Heros</h1>
        <Block variant="green">
          <Hero asset={<Image src={HeroImage} alt="Demo Hero Image" />}>
            <h1 className="h1">Hero with Asset</h1>
          </Hero>
        </Block>
        <Block variant="blue">
          <Hero>
            <p>Hero</p>
            <h1 className="h1">Blue without Asset</h1>
          </Hero>
        </Block>
        <Block variant="green">
          <Hero>
            <p>Hero</p>
            <h1 className="h1">Without Asset</h1>
          </Hero>
        </Block>
      </section>
    </div>
  );
}
