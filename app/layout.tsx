import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocaleProvider } from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "ru_RU"
  },
  metadataBase: new URL("https://example.com")
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
