import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Bright Smile Design - Clínica Dental",
  description: "Clínica dental especializada en diseño de sonrisa y salud bucal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          <ScrollToTop />
          {children}
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
