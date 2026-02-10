import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satya Social Welfare Trust",
  description: "Serving Society. Empowering Lives. Building the Future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Define gtag on window as early as possible (beforeInteractive) so it's available in console */}
        <Script id="gtag-init" strategy="beforeInteractive">
          {"window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);}"}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
