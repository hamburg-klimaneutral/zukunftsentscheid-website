import { twMerge } from "tailwind-merge";

interface TextQuoteProps {
  children: React.ReactNode;
  variant: keyof typeof VARIANTS;
  author: string;
  className?: string;
}

const VARIANTS = {
  blue: "text-blue-light",
  pinkDark: "text-pink-dark",
  greenNeon: "text-green-neon",
  pinkLight: "text-pink-light",
} as const;

const QuoteSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
  >
    <path
      d="M10.7284 32H3.39506C1.49383 32 0 30.4893 0 28.5665V21.4249C0 12.2232 3.25926 5.90558 5.4321 2.60945C6.38272 1.3734 8.96296 0 10.4568 0H11.4074C12.9012 0 13.7161 1.51073 12.9012 2.88412C11.1358 5.6309 8.82716 10.0258 8.28395 13.7339C8.14815 14.4206 8.69136 15.1073 9.37037 15.1073H11.2716C12.7654 15.1073 14.1235 16.4807 14.1235 17.9914V28.5665C14.1235 30.4893 12.6296 32 10.7284 32ZM29.6049 32H22.2716C20.3704 32 18.8765 30.4893 18.8765 28.5665V21.4249C18.8765 12.2232 22.1358 5.90558 24.3086 2.60945C25.2593 1.3734 27.8395 0 29.3333 0H30.284C31.7778 0 32.5926 1.51073 31.7778 2.88412C30.0123 5.6309 27.7037 10.0258 27.1605 13.7339C27.0247 14.4206 27.5679 15.1073 28.2469 15.1073H30.1481C31.642 15.1073 33 16.4807 33 17.9914V28.5665C33 30.4893 31.5062 32 29.6049 32Z"
      fill="currentColor"
      aria-hidden
    />
  </svg>
);

export default function TextQuote({
  children,
  author,
  variant,
  className,
}: TextQuoteProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-5">
      <figure className={VARIANTS[variant]}>
        <QuoteSvg />
      </figure>
      <blockquote
        className={twMerge("quote-small space-y-4 text-center", className)}
      >
        {children}
      </blockquote>
      <p>{author}</p>
    </div>
  );
}
