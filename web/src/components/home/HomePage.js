import React from 'react';
import LandingCard from './LandingCard';
import WhatCard from './WhatCard';
import WhyCard from './WhyCard';
import GettingStartedCard from './GettingStartedCard';

export default function HomePage() {
  return (
    <div>
      <LandingCard />
      <WhatCard />
      <WhyCard />
      <GettingStartedCard />
    </div>
  );
}
