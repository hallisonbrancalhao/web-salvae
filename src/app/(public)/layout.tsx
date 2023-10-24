import { NavBar } from "@/framework/components/header/header";
import type { Metadata } from "next";
import "@/app/globals.css";
import Script from "next/script";

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
      </body>
    </html>
  );
}
