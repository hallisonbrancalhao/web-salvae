import { NavBar } from "@/framework/components/header/header";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "SalvaÊ",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  );
}
