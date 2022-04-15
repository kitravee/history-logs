import Box from '@mui/system/Box';
import React from 'react';

interface PageVerticalSpacingProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageVerticalSpacing: React.FC<PageVerticalSpacingProps> = ({
  children,
}) => {
  return <Box p={1}>{children}</Box>;
};
