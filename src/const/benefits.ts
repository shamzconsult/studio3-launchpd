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
    title: "Affordable Education",
    description:
      "We offer a variety of subjects and skills to empower your educational journey without heavy expenses removing financial barriers to valuable learning.",
  },
  {
    icon: PiCertificateBold,
    title: "Industry-Recognized Certifications",
    description:
      "Earn valuable credentials that enhance your resume, effectively demonstrate your expertise and skills to potential employers, setting you apart in a competitive job market.",
  },
  {
    icon: PiCirclesThreeBold,
    title: "Personalized Learning Paths",
    description:
      "We tailor educational courses to match your career goals and current skills, providing a personalized learning experience to help you reach your professional objectives.",
  },
];
