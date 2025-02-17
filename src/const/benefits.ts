import { FaGraduationCap } from "react-icons/fa";
import { PiCertificateBold, PiCirclesThreeBold } from "react-icons/pi";
import { IconType } from "react-icons";
import { MdOutlineScale } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { GiAnvilImpact } from "react-icons/gi";

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
    title: "Industry-Recognized Certifications",
    description:
      "Unlock your potential with our affordable, high-quality certification courses . Our platform provides a diverse range of  skills, ensuring you can enhance your career without breaking the bank.",
  },
  {
    icon: PiCirclesThreeBold,
    title: "Personalized Learning Paths",
    description:
      "We tailor educational courses to match your career goals and current skills, providing a personalized learning experience to help you reach your professional objectives.",
  },
];

export const partnerBenefits: BenefitType[] = [
  {
    icon: MdOutlineScale,
    title: "Scalable Business Model",
    description:
      "Our platform subscription-based revenue and diversified product offerings provide a scalable and sustainable income stream.",
  },
  {
    icon: HiLightBulb,
    title: "Innovative Learning Platform",
    description:
      "Studio3Launchpad uses advanced AI and gamification to provide a unique user experience, ensuring its a smart, future-ready investment.",
  },
  {
    icon: GiAnvilImpact,
    title: "Impact-Driven Investment",
    description:
      "By partnering with Studio3Launchpad, you contribute to shaping the future of education, making learning accessible to underserved communities while achieving your financial goals.",
  },
];
