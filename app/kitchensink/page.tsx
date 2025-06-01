export default function KitchenSinkPage() {
  return (
    <div className="max-w-5xl m-auto gap-20 p-4 sm:mt-8 flex flex-col">
      <section className="prose flex flex-col gap-4">
        <h1>Prose</h1>
        <p className="text-base sm:text-lg">Für Fließtexte</p>

        <h1>H1: Besseres Klimaschutzgesetz</h1>
        <h2>H2: Besseres Klimaschutzgesetz</h2>
        <h3>H3: Besseres Klimaschutzgesetz</h3>
        <p>
          Body: Lorem Ipsum dolor <strong>strong</strong> sit amet
        </p>
        <small>Tiny Body: Lorem Ipsum dolor <strong>strong</strong> sit amet</small>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="h1">Menu and Buttons</h1>
        <ul className="flex gap-1">
          <li className="text-menu-item">Menu Item</li>
          <li className="text-menu-item font-semibold">Menu Item</li>
          <li className="text-menu-item">Menu Item</li>
        </ul>
        <div className="flex gap-2">
        <a href="#" className="button">Button</a>
        <a href="#" className="button primary">Primary Button</a>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="h1">Colors</h1>
        <h2 className="h2">Brand Colors</h2>
        <ul className="grid grid-cols-4 md:grid-cols-8 gap-4 my-5">
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-pink-dark rounded-full"></div>
            <span className="font-semibold">pink-dark</span>
            <span className="text-tiny">#cc0070</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-green-dark rounded-full"></div>
            <span className="font-semibold">green-dark</span>
            <span className="text-tiny">#235753</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-blue-light rounded-full"></div>
            <span className="font-semibold">blue-light</span>
            <span className="text-tiny">#a9d8d8</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-pink-light rounded-full"></div>
            <span className="font-semibold">pink-light</span>
            <span className="text-tiny">#f5cde2</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-green-neon rounded-full"></div>
            <span className="font-semibold">green-neon</span>
            <span className="text-tiny">#c8ff00</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-white rounded-full border border-gray-200"></div>
            <span className="font-semibold">white</span>
            <span className="text-tiny">#ffffff</span>
          </li>
        </ul>

        <h2 className="h2">Utility Colors</h2>
        <ul className="grid grid-cols-4 md:grid-cols-8 gap-4 my-5">
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-pink-dark-80 rounded-full"></div>
            <span className="font-semibold">pink-dark-80</span>
            <span className="text-tiny">#e43997</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-green-dark-80 rounded-full"></div>
            <span className="font-semibold">green-dark-80</span>
            <span className="text-tiny">#40827d</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-blue-light-80 rounded-full"></div>
            <span className="font-semibold">blue-light-80</span>
            <span className="text-tiny">#c8f7f7</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-green-neon-80 rounded-full"></div>
            <span className="font-semibold">green-neon-80</span>
            <span className="text-tiny">#e5ff89</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-focus rounded-full"></div>
            <span className="font-semibold">focus</span>
            <span className="text-tiny">#539eff</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-grey rounded-full"></div>
            <span className="font-semibold">grey</span>
            <span className="text-tiny">#b8b8b8</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-error rounded-full"></div>
            <span className="font-semibold">error</span>
            <span className="text-tiny">#de252e</span>
          </li>
          <li className="flex flex-col gap-1 items-center">
            <div className="h-24 w-24 bg-success rounded-full"></div>
            <span className="font-semibold">success</span>
            <span className="text-tiny">#49c654</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
