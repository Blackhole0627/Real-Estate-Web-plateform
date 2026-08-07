import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Image from "next/image";
import { site } from "@/data/site";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Onker Home · Bienes raíces de lujo en República Dominicana",
    template: "%s · Onker Home",
  },
  description:
    "Compra, alquila, vende e invierte en las mejores zonas de República Dominicana. Onker Home — inmobiliaria boutique especializada en marketing digital, Santo Domingo.",
  keywords:
    "bienes raices republica dominicana, apartamentos santo domingo, villas punta cana, cap cana, casa de campo, las terrenas, inversion inmobiliaria rd",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Onker Home · Bienes raíces de lujo en República Dominicana",
    description:
      "Inmobiliaria boutique de República Dominicana. Donde el lujo se vive.",
    locale: "es_DO",
    type: "website",
    siteName: site.name,
    images: [{ url: "/assets/hero.jpg", width: 1600, height: 900 }],
  },
  robots: { index: true, follow: true },
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-DO" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <div className="splash" aria-hidden="true">
          <Image
            src="/assets/logo-black.png"
            alt=""
            width={150}
            height={64}
            priority
          />
        </div>
        {children}
      </body>
    </html>
  );
}
