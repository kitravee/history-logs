import { NavContent } from './nav-content';
import { NavbarContainer } from '@/layouts/funny-layout/navbar-container';
import React, { ReactNode } from 'react';
import type { FC } from 'react';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavbarContainer>
        <NavContent />
      </NavbarContainer>
      <div>{children}</div>
    </div>
  );
};
