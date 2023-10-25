import Sidebar from "@/framework/components/side-bar/side-bar";
import type { Metadata } from "next";
import "./styles.scss";
import "src/app/globals.css";
import { RequireAuth } from "@/core/context";

export const metadata: Metadata = {
  title: "SalvaÊ",
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
//    <RequireAuth>
      <section className="privates-container">
        <Sidebar />
        <div className="lateral">
        </div>
        <main>{children}</main>
      </section>
//    </RequireAuth>
  );
}
