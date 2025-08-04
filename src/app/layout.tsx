import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "./components/navigation";
import Footer from "./components/footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACYA UNSW",
  description: "The official website for ACYA's UNSW chapter.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${nunitoSans.variable} antialiased`}>
        <Navigation/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
