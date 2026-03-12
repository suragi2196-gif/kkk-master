import type { Metadata } from "next";
import { Roboto_Condensed, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suragi Official",
  description: "このサイトは、ボカロP「suragi」の公式サイトです。これまでに投稿したボカロ楽曲のoffボーカルのダウンロードや、楽曲制作などの各種ご依頼を受け付けています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${robotoCondensed.variable} ${notoSansJP.variable} antialiased bg-[#111111] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
