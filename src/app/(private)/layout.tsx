"use client";
import Sidebar from "@/framework/components/side-bar/side-bar";
import "./styles.scss";
import "src/app/globals.css";
import PrivateRoute from "@/framework/components/private-route";
import { usePathname } from "next/navigation";
import { checkIsPublic } from "@/services";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="privates-container">
      <Sidebar />
      <div className="lateral"></div>
      <main>{children}</main>
    </section>
  );
}
