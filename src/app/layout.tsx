import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Lexend, Libre_Baskerville } from "next/font/google";
import { Layout } from "../components/Layout";
import "./globals.css";

const sans = Lexend({
  variable: "--font-sans-serif",
  subsets: ["latin"],
});

const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "|\\|370.info",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${sans.className} ${serif.variable}`}
      >
        <Layout>{children}</Layout>
      </body>
      <GoogleTagManager gtmId="GTM-KXTGFL" />
    </html>
  );
}
