import type { Metadata } from "next";
import "src/app/globals.css";

export const metadata: Metadata = {
  title: "SalvaÊ",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section> {children} </section>
}
