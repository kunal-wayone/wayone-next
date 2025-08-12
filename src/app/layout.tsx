import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import FooterSection from "@/components/FooterSection";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you need
  variable: '--font-poppins',   // Optional: use as CSS variable
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you need
  variable: '--font-raleway',   // Optional: use as CSS variable
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Wayone It Solution",
  description: "Wayone It Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
