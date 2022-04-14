import MainAppBar from './responsive-main-appbar';
import Footer from './footer';
import React from 'react';

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
