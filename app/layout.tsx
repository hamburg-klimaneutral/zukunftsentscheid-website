import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const veneer = localFont({
  variable: "--font-veneer",
  src: "./fonts/veneer.woff2",
});

export const metadata: Metadata = {
  title: "Zukunftsentscheid Hamburg",
  description: "Zusammen ändern wir das Hamburger Klimaschutzgesetz! Wenn wir jetzt handeln, erhalten wir unsere Lebensgrundlage und unser Zuhause: Hamburg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${veneer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
