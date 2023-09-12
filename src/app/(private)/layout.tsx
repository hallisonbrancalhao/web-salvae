import Sidebar from "@/framework/components/side-bar/side-bar";
import "../globals.css";
import "./styles.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Generated by create next app",
};

export default function Sidelyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
    <main>
      <section>
        <div className="layout">
          <nav className="layout__sidebar">
            <Sidebar />
          </nav>
          {children}
        </div>
      </section>
    </main>
    </html>
      
  );
}
