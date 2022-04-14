import SwipeableTemporaryDrawer from './swipeable-slide-drawer';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import router from 'next/router';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export type NavMenuList = {
  href: string;
  icon?: React.ReactNode;
  name: string;
};

const list: NavMenuList[] = [
  { href: '/team', icon: <PeopleOutlineIcon />, name: 'Team' },
];

interface ResponsiveMainAppBarProps {
  className?: string;
}

const ResponsiveMainAppBar: React.FC<ResponsiveMainAppBarProps> = ({
  className,
}) => {
  const onScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <AppBar
      className={className}
      color="inherit"
      position="sticky"
      sx={{
        boxShadow: onScrollTrigger ? 1 : 'none',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{ display: { md: 'flex', xs: 'none' } }}
            variant="h6"
          >
            Store
          </Typography>

          <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <SwipeableTemporaryDrawer anchor="left" list={list}>
              <IconButton aria-haspopup="true" color="inherit" size="large">
                <MenuIcon />
              </IconButton>
            </SwipeableTemporaryDrawer>
          </Box>

          <Typography
            noWrap
            component="div"
            sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}
            variant="h6"
          >
            Store
          </Typography>

          <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
            {list.map(({ name, href }) => (
              <Button
                key={name}
                size="large"
                sx={{ color: 'primary', display: 'block' }}
                onClick={() => {
                  router.push(href);
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button color="primary" variant="contained">
              Connect Wallet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveMainAppBar;
