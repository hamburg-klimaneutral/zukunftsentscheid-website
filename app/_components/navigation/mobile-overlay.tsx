import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

export default function MobileOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-green-dark fixed inset-0 z-20 flex h-dvh w-screen flex-col justify-between pt-30 lg:hidden">
          <Dialog.Content className="h-full w-full overflow-y-scroll">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            {children}
            <div className="absolute top-0 flex w-full justify-between px-5 py-6">
              <figure>
                <Image
                  src="/logo.svg"
                  alt="Zukunftsentscheid-Hamburg Logo"
                  width={213}
                  height={58}
                />
              </figure>
              <Dialog.Close
                className="select-none"
                aria-label="Navigation schließen"
              >
                <Image
                  src="/icons/close.svg"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                  alt=""
                  aria-hidden
                />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
      <Dialog.Trigger
        className="data-[state=open]:hidden lg:hidden"
        aria-label="Navigation öffnen"
      >
        <Image
          src="/icons/burger.svg"
          width={48}
          height={48}
          className="h-12 w-12"
          alt=""
          aria-hidden
        />
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
