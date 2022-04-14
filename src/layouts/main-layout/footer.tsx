import GradientSection from '@/components/BoxGradient';
import React from 'react';
import { Container, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/system/Box';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <GradientSection alignItems="center" display="flex" justifyContent="center">
      <Container>
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Typography color={(theme) => theme.palette.primary.contrastText}>
            JanLuffi &reg; {new Date().getFullYear()}
          </Typography>
          <IconButton aria-label="add an alarm" style={{ color: 'white' }}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Container>
    </GradientSection>
  );
};

export default Footer;
