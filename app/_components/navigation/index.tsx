import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { NAVIGATION_ITEMS, NAVIGATION_BUTTONS } from "./items";
import { twMerge } from "tailwind-merge";
export { default as MobileOverlay } from "./mobile-overlay";

export default function Navigation({
  className,
  orientation,
}: {
  className?: string;
  orientation?: NavigationMenu.NavigationMenuProps["orientation"];
}) {
  return (
    <NavigationMenu.Root
      className={twMerge("z-10", className)}
      orientation={orientation}
    >
      <NavigationMenu.List className="group/list flex data-[orientation=vertical]:flex-col gap-0.5 items-center">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationMenu.Item
            key={item.title}
            className="relative w-full bg-blue-light lg:bg-transparent lg:w-auto"
          >
            {"items" in item ? (
              <>
                <NavigationMenu.Trigger className="group nav-item lg:data-[state=open]:bg-green-dark-80">
                  {item.title}{" "}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    className="transition-transform group-data-[state=open]:-rotate-180"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      className="stroke-green-dark group-data-[orientation=horizontal]/list:stroke-white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="bg-blue-light text-green-dark whitespace-nowrap lg:rounded-xs lg:absolute lg:w-full lg:top-full">
                  <ul className="p-0.5 flex flex-col">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenu.Link
                          href={subItem.href}
                          className="nav-item px-6 lg:px-3"
                        >
                          {subItem.title}
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </>
            ) : (
              <NavigationMenu.Link className="nav-item" href={item.href}>
                {item.title}
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}
        {NAVIGATION_BUTTONS.map((button) => (
          <NavigationMenu.Item
            key={button.title}
            className="-order-1 lg:order-1 w-full lg:w-auto px-6 lg:px-2 mb-3 lg:m-0 last:mb-5 lg:last:m-0 lg:py-3.5"
          >
            <NavigationMenu.Link
              href={button.href}
              className={twMerge("button w-full leading-6", button.className)}
            >
              {button.title}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
