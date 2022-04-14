import React, { ReactElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import type { FC } from 'react';

interface HideOnScrollProps {
  children: ReactElement;
}

export const HideOnScroll: FC<HideOnScrollProps> = ({ children }) => {
  const onScrollTrigger = useScrollTrigger({ threshold: 200 });
  return (
    <Slide appear={false} direction="down" in={!onScrollTrigger}>
      {children}
    </Slide>
  );
};
