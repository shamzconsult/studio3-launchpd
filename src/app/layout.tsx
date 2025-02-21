import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/atoms/Navbar";
import { Footer } from "@/components/atoms/Footer";
import { openSans } from "@/const/font";

export const metadata: Metadata = {
  title: "Studio3 Launchpad",
  description: "Online tech training programs",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740037804/HR_LOGO1_4_3_nfapse.png",
    ],
  },
  keywords: [
    "Online tech training programs",
    "Launch your tech career",
    "Tech training program",
    "Learn in demand tech skills",
    "Best online training platforms",
    "Digital skills for young professionals",
    "Digital skills bootcamp",
    "Learn software development online",
    "Data analytics training course",
    "Product management certification",
    "Web3 development courses",
    "UI/UX design training",
    "Affordable tech education",
    "Cohort-based learning programs",
  ],
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
