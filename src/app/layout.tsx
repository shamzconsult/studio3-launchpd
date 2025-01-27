import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/atoms/Navbar";
import { Footer } from "@/components/atoms/Footer";
import { openSans } from "@/const/font";

export const metadata: Metadata = {
  title: "Edutech",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.className}`}>
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
