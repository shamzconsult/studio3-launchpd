"use client";

import { BenefitCards } from "@/components/atoms/BenefitCards";
import { PartnerHero } from "./PartnerHero";
import { PartnerForm } from "./PartnerForm";

export const PartnerPage = () => {
  return (
    <div className="">
      <PartnerHero />
      <div className="py-20">
        <BenefitCards
          header="Why you should partner with us"
          subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
      </div>
      <PartnerForm header="Learn more about partnering with us" />
    </div>
  );
};
