import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      {/* make sure we don't have white space below the footer */}
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
