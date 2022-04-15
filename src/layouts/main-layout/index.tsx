import React from 'react';

import Footer from './footer';
import MainAppBar from './responsive-main-appbar';

interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <MainAppBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
