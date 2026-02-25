import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KBO Wordle | 매일 야구 선수 맞추기",
  description: "KBO 팬들을 위한 매일 단어 맞추기 게임입니다.",
  openGraph: {
    title: "KBO Wordle | 매일 야구 선수 맞추기",
    description: "KBO 팬들을 위한 매일 단어 맞추기 게임입니다.",
    url: "https://kbordle.vercel.app",
    siteName: "KBORDLE",
    images: [{ url: "https://kbordle.vercel.app/og-image.png", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
