"use client";

import { JoinTeam } from "@/components/atoms/JoinTeam";
import { TeamCard } from "./TeamCard";
import { TeamHero } from "./TeamHero";
import FAQ from "@/components/atoms/FAQs";
import { Carousel } from "@/components/atoms/Carousel";
import { partners } from "@/const/partners";

export const TeamPage = () => {
  return (
    <div>
      <TeamHero />
      <TeamCard />
      <JoinTeam />
      <FAQ />
      <Carousel title="Our Partners" logos={partners} />
    </div>
  );
};
