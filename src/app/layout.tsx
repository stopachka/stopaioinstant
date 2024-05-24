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
  alternates: {
    canonical: "https://stopa.io",
    types: {
      "application/rss+xml": 'https://stopa.io/feed.rss',
      "application/atom+xml": 'https://stopa.io/feed.atom',
    }
  }
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
