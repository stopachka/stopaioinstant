import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";
import Link from "next/link";


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
          <header className="inline-flex space-x-2 font-medium mb-4">
            <Link href="/" className="text-black visited:text-black">
              Stepan <span className="hidden md:inline">Parunashvili</span>
            </Link>
            <Link href="https://twitter.com/stopachka" target="_blank">
              Twitter
            </Link>
            <Link href="https://instantdb.com" target="_blank">Instant</Link>
            <Link href="https://zeneca.io/stopa" target="_blank">Books</Link>
            <Link href="https://consistent.fit" target="_blank">Consistent</Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
