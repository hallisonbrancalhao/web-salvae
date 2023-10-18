import { Footer } from "@/framework/components/foolter/footer";
import { NavBar } from "@/framework/components/header/header";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "SalvaÊ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
