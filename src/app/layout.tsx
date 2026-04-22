/* Arquivo alterado na data 02/03/2026 as 17:48 */
/* Autor: Matheus de Freitas */

import type { Metadata } from 'next';
import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

// Configuração central de SEO e Metadados da aplicação
export const metadata: Metadata = {
  title: {
    default: 'Danillo Leão | Advocacia Especializada em Direito Médico',
    template: '%s | Danillo Leão' // Para subpáginas, ex: "Política de Privacidade | Danillo Leão"
  },
  description: 'Atendimento jurídico especializado em Direito Médico e da Saúde. Defesa de profissionais da saúde, erro médico, liminares e negativas de planos de saúde.',
  keywords: ['advogado direito médico', 'advogado plano de saúde', 'erro médico', 'defesa CRM', 'liminar plano de saúde', 'Danillo Leão advogado'],
  authors: [{ name: 'Danillo Leão' }],
  creator: 'Tecfy',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.danilloleaoadv.com', // Confirme se será esse o domínio final
    title: 'Danillo Leão | Advocacia Especializada em Direito Médico',
    description: 'Atendimento jurídico especializado em Direito Médico e da Saúde. Atendimento ágil e focado na resolução do seu problema.',
    siteName: 'Danillo Leão - Advocacia',
    images: [
      {
        url: 'https://www.danilloleao.com.br/og-image.jpg', // Imagem de compartilhamento do WhatsApp/LinkedIn
        width: 1200,
        height: 630,
        alt: 'Danillo Leão - Direito Médico',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <head>
      <meta name="adopt-website-id" content="fe0581d9-ac07-4b8d-91c3-3e88d1c9311d" />
      <Script 
          src="//tag.goadopt.io/injector.js?website_code=fe0581d9-ac07-4b8d-91c3-3e88d1c9311d"
          strategy="afterInteractive"
          className="adopt-injector"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18112331364');
          `}
        </Script>
      </head>
      
      <body className={satoshiFont.variable}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-GPCCT75Z8N'/>
    </html>
  );
}