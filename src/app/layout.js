import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meine Electric | Long Duration Energy Storage with Iron Air Batteries",
  description: "Discover Meine Electric's iron-air battery solutions—engineered for the realities of renewable-heavy grids. Our core innovation enables fast charging in just 6-8 hours and long-duration discharge of 16-18+ hours, perfectly matching solar-dominant duty cycles. Built for utilities, industries, and communities, Meine Electric delivers low-cost, clean, and reliable energy storage for a scalable transition to renewable power.",
  keywords: ["Meine Electric", "Iron-Air Battery", "Longterm Energy Storage"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
