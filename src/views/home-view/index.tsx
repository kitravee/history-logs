import { Hero } from './hero';
import { SubScribe } from './sub-scribe';
import MainLayout from '@/layouts/main-layout';
import React from 'react';

const HomeView: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <SubScribe />
    </MainLayout>
  );
};

export default HomeView;
