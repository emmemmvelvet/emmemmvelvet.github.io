import React from 'react';
import type { Metadata } from 'next';
import DemoOne from '@/components/ui/arc-demo';

export const metadata: Metadata = {
  title: 'Arc Preloader Hero Demo | Emm Emm Velvet',
  description: 'Standalone demo of ArcRevealHero preloader component.',
};

export default function DemoPage() {
  return <DemoOne />;
}
