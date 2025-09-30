import type { Metadata } from "next";
import "./styles/globals.css";
import { Providers } from "./providers";
import { ClientLayout } from "./ClientLayout";

export const metadata: Metadata = {
  title: "Autos Market",
  description: "Find and sell cars in Argentina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
