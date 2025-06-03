import Image from "next/image";

export function LayoutHeader() {
    return (
        <header className="bg-green-dark py-3 sm:py-6 text-white">
            <div className="container m-auto">
                <Image
                    src="/logo.svg"
                    alt="Zukunftsentscheid Logo"
                    width={213}
                    height={58}
                    priority
                />
            </div>
        </header>
    )
}