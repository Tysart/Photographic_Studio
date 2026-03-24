import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocaleProvider } from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://tessartatelier.com"),
  icons: {
    icon: "/brand/tessart-monogram.svg",
    shortcut: "/brand/tessart-monogram.svg",
    apple: "/brand/tessart-monogram.svg"
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: "https://tessartatelier.com",
    siteName: "TESSART",
    locale: "ru_RU",
    images: [
      {
        url: "/brand/tessart-og.png",
        width: 1200,
        height: 630,
        alt: "TESSART — Портрет на плёнку в Санкт-Петербурге"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/brand/tessart-og.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <LocaleProvider>
          <div className="app-root">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
