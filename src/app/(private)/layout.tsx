"use client";
import Sidebar from "@/framework/components/side-bar/side-bar";
import "./styles.scss";
import "src/app/globals.css";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="privates-container">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
