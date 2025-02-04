"use client";

import { JoinTeam } from "@/components/atoms/JoinTeam";
import { TeamCard } from "./TeamCard";
import { TeamHero } from "./TeamHero";
import FAQ from "@/components/atoms/FAQs";
import { Carousel } from "@/components/atoms/Carousel";
import { partners } from "@/const/partners";
import { financeFAQ } from "@/const/faqs";

export const TeamPage = () => {
  return (
    <div>
      <TeamHero />
      <TeamCard />
      <JoinTeam />
      <FAQ faqData={financeFAQ} />
      <Carousel title="Our Partners" logos={partners} />
    </div>
  );
};
