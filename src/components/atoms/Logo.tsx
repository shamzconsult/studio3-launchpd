"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="text-xl font-medium">
    <div className="w-[78px]  h-[32px] lg:w-[98px] lg:h-[48px] relative ">
      <Image
        src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1740037804/HR_LOGO1_4_3_nfapse.png"
        alt="logo"
        fill
      />
    </div>
  </Link>
);
