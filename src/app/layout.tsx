import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEWEAR",
  description: "BEWEAR é o e-commerce de roupas que reúne diversas marcas famosas em um só lugar. Encontre as últimas tendências de moda masculina, feminina e infantil com qualidade, estilo e preços irresistíveis. Compre online peças originais, lançamentos exclusivos e aproveite promoções imperdíveis. BEWEAR: seu destino de moda das marcas mais desejadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
