'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Header } from "@/ui/header";
import { Footer } from "@/ui/footer";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <SessionProvider>


        <GoogleTagManager gtmId={gtmId} />

        <body className="min-h-full">
          <Header />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
