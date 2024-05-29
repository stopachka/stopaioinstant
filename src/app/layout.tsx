import type { Metadata } from "next";
import { Spectral, Fira_Code } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  subsets: ["latin-ext"],
  display: "block"
});

const firaCode = Fira_Code({
  weight: ['400', '500'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code',
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
    <html className={`${spectral.variable} ${firaCode.variable}`} lang="en">
      <body className="font-serif">
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
