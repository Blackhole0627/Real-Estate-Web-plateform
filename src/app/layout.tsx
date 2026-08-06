import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
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
  title: "Onker Home · Bienes raíces de lujo en República Dominicana",
  description:
    "Compra, alquila, vende e invierte en las mejores zonas de República Dominicana. Onker Home — inmobiliaria boutique especializada en marketing digital, Santo Domingo.",
  keywords:
    "bienes raices republica dominicana, apartamentos santo domingo, villas punta cana, cap cana, casa de campo, las terrenas, inversion inmobiliaria rd",
  openGraph: {
    title: "Onker Home · Bienes raíces de lujo en República Dominicana",
    description:
      "Inmobiliaria boutique de República Dominicana. Donde el lujo se vive.",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-DO" className={`${lora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
