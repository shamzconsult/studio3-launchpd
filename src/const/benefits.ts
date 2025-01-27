import { FaGraduationCap } from "react-icons/fa";
import { PiCertificateBold, PiCirclesThreeBold } from "react-icons/pi";
import { IconType } from "react-icons";

export type BenefitType = {
  icon: IconType | string;
  title: string;
  description: string;
};

export const benefits: BenefitType[] = [
  {
    icon: FaGraduationCap,
    title: "Affordable and Accessible Education",
    description:
      "Access high-quality courses at a low cost, removing financial barriers to valuable learning. Our platform offers a variety of subjects and skills to empower your educational journey without heavy expenses.",
  },
  {
    icon: PiCertificateBold,
    title: "Affordable and Accessible Education",
    description:
      "Access high-quality courses at a low cost, removing financial barriers to valuable learning. Our platform offers a variety of subjects and skills to empower your educational journey without heavy expenses.",
  },
  {
    icon: PiCirclesThreeBold,
    title: "Affordable and Accessible Education",
    description:
      "Access high-quality courses at a low cost, removing financial barriers to valuable learning. Our platform offers a variety of subjects and skills to empower your educational journey without heavy expenses.",
  },
];
