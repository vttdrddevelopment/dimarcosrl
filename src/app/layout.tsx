import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/cookie/CookieConsentBanner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Di Marco Infissi - Casoli",
  description: "Infissi in alluminio e PVC, Casoli, Abruzzo",
  keywords: ["infissi", "casoli", "abruzzo", "finestre", "alluminio", "pvc", "Di Marco", "infissi casoli", "infissi dimarco", "finestre casoli", "infissi abruzzo", "finestre abruzzo", "di marco srl", "zanzariere", "portoni", "porte garage", "oscuranti", "persiane", "balconi", "serramenti casoli", "ringhiere"],
  verification: {google: 'xT_g8n__loLi9AoODG48cJG_Pjjc_U-JtJG6-ZNXaco'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
