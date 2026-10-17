import React from 'react';
import { ArcRevealHero } from '@/components/ui/arc-preloader-hero';
import HeroSection from '@/components/HeroSection';
import PositioningSection from '@/components/PositioningSection';
import LookbookSection from '@/components/LookbookSection';
import OemSection from '@/components/OemSection';
import JournalPreviewSection from '@/components/JournalPreviewSection';
import EnquirySection from '@/components/EnquirySection';

const PRELOADER_GREETINGS = [
  { text: "Emm Emm Velvet" },
  { text: "Est. 1995" },
  { text: "Panipat" },
  { text: "Sofa Fabric" },
  { text: "Sofa Cover" },
  { text: "Bedding" },
  { text: "Cushions" },
];

export default function HomePage() {
  return (
    <ArcRevealHero
      greetings={PRELOADER_GREETINGS}
      greetingHold={380}
      revealDuration={1100}
      curtainColor="#FFFFFF"
      className="bg-[#FBF9F5]"
      greetingClassName="font-serif text-[#141715] font-light tracking-tight text-4xl sm:text-6xl md:text-7xl"
    >
      <HeroSection />
      <PositioningSection />
      <LookbookSection />
      <OemSection />
      <JournalPreviewSection />
      <EnquirySection />
    </ArcRevealHero>
  );
}
