import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

export default function MobileOverlay({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay className="lg:hidden fixed inset-0 h-dvh w-screen bg-green-dark flex flex-col justify-between pt-30 z-20">
          <Dialog.Content className="w-full h-full">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            {children}
          </Dialog.Content>
          <div className="absolute top-0 py-6 px-5 flex w-full justify-between">
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
              className="w-12 h-12"
              alt=""
              aria-hidden
            />
          </Dialog.Close>
          </div>
        </Dialog.Overlay>
      </Dialog.Portal>
      <Dialog.Trigger
        className="lg:hidden data-[state=open]:hidden"
        aria-label="Navigation öffnen"
      >
        <Image
          src="/icons/burger.svg"
          width={48}
          height={48}
          className="w-12 h-12"
          alt=""
          aria-hidden
        />
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
