"use client";

import { BenefitCards } from "@/components/atoms/BenefitCards";
import { PartnerHero } from "./PartnerHero";
import { PartnerForm } from "./PartnerForm";
import { partnerBenefits } from "@/const/benefits";

export const PartnerPage = () => {
  return (
    <div className="">
      <PartnerHero />
      <div className=" py-10 lg:py-20">
        <BenefitCards
          header="Why you should partner with us"
          subheader="Unlock unparalleled opportunities for growth, impact, and innovation."
          data={partnerBenefits}
        />
      </div>
      <PartnerForm header="Learn more about partnering with us" />
    </div>
  );
};
