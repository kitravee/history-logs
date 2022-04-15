import React from 'react';

import MainLayout from '@/layouts/main-layout';

import { Hero } from './hero';
import { SubScribe } from './sub-scribe';

const HomeView: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <SubScribe />
    </MainLayout>
  );
};

export default HomeView;
