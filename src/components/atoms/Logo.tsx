"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="text-xl font-medium">
    <div className="w-[124px] h-[64px] relative ">
      <Image
        src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1739343073/edutech/HR_LOGO1_4_2_vrvjga.png"
        alt="logo"
        fill
      />
    </div>
  </Link>
);
