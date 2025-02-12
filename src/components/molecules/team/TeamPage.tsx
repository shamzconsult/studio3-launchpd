"use client";

import { JoinTeam } from "@/components/atoms/JoinTeam";
import { TeamCard } from "./TeamCard";
import { TeamHero } from "./TeamHero";
import FAQ from "@/components/atoms/FAQs";
import { Carousel } from "@/components/atoms/Carousel";
import { partners } from "@/const/partners";
import { generalFAQ } from "@/const/faqs";
import { getFAQQuestionsByCategory } from "@/utils/getFAQ";

export const TeamPage = () => {
  const financeFAQQuestions = getFAQQuestionsByCategory(generalFAQ, "finance");
  return (
    <div className="">
      <TeamHero />
      <TeamCard />
      <JoinTeam />
      <FAQ faqData={financeFAQQuestions} />
      <Carousel title="Our Partners" logos={partners} />
    </div>
  );
};
