import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  display: "block"
});

export const metadata: Metadata = {
  title: "Stepan Parunashvili",
  description: "Read Essays by Stepan Parunashvili",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
