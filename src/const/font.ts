import { Outfit, Open_Sans } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

export const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });
