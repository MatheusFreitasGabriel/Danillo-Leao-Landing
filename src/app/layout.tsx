/* Arquivo alterado na data 02/03/2026 as 17:48 */
/* Autor: Matheus de Freitas */

import "./globals.css";
import localFont from "next/font/local";

const satoshiFont = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <title>Danillo Leão - Direito Médico</title>
      <body className={satoshiFont.variable}>
        {children}
      </body>
    </html>
  );
}
