import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anime Wave",
  description: "Rede social com foco em animes e mangas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E1F8FF] h-full`}>
        <CookiesProvider>
          {children}
        </CookiesProvider>
      </body>
    </html>
  );
}