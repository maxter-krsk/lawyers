import type { Metadata } from "next";
import { geologica } from "@/app/components/ui/fonts";
import "./globals.css";
import Header from "@/app/components/shared/Header/Header";
import Footer from "@/app/components/shared/Footer/Footer";
import CookiesBanner from "@/app/components/ui/CookiesBanner";
import ScrollTop from "@/app/components/ui/ScrollToTop";

// Мета-данные

export const metadata: Metadata = {
  metadataBase: new URL("https://domain.ru"),
  alternates: { canonical: "/" },

  title: "Название сайта",
  description: "Описание сайта",

  openGraph: {
    title: "Название сайта для соц. сетей",
    description: "Описание сайта для соц. сетей",
    url: "https://domain.ru",
    siteName: "Название сайта для соц. сетей",
    images: [
      {
        url: "/og/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Превью сайта",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Название сайта для соц. сетей",
    description: "Описание сайта для соц. сетей",
    images: ["/og/og-img.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/png",
        sizes: "32x32",
      },

      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    apple: [{ url: "/icons/favicons/favicon-large.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geologica.className} bg-softWhite text-main min-h-screen overflow-x-hidden antialiased`}
      >
        <div className="block sm:hidden">
          <Header variant="top" />
        </div>

        <div className="flex min-h-screen w-full flex-col">
          <div className="flex w-full flex-1 flex-col sm:flex-row">
            <main className="flex min-w-0 flex-1 flex-col">
              <div className="min-w-0 flex-1">{children}</div>
            </main>

            <aside className="hidden shrink-0 sm:block">
              <Header variant="side" />
            </aside>
          </div>

          <Footer />
        </div>

        <CookiesBanner />
        <ScrollTop />
      </body>
    </html>
  );
}
