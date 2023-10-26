"use client";
import "@/app/globals.css";
import { AuthProvider } from "@/core/context";
import PrivateRoute from "@/framework/components/private-route";
import { checkIsPublic } from "@/services";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublic = checkIsPublic(pathname);
  return (
    <html lang="pt-BR">
      <body>
        {isPublic && children}
        {!isPublic && (
          <PrivateRoute>
            <AuthProvider>{children}</AuthProvider>
          </PrivateRoute>
        )}
      </body>
    </html>
  );
}
