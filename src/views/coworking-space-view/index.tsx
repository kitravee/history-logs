import FebCard from '@/components/FebCard';
import { PageVerticalSpacing } from '@/components/PageVerticalSpacing';
// import LineChart from '@/components/chart/LineChart';
// import AreaBump from '@/components/chart/AreaBump';

import React from 'react';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NoSsr } from '@mui/material';

interface CoworkingSpaceViewProps {
  className?: string;
}

const drawerWidth = 250;

const CoworkingSpaceView: React.FC<CoworkingSpaceViewProps> = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Drawer
            open
            // ModalProps={{
            //   keepMounted: true, // Better open performance on mobile.
            // }}
            anchor="left"
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },

              width: drawerWidth,
            }}
            variant="permanent"
          >
            {/* <Sidebar /> */}
          </Drawer>
        </Box>

        <Container>
          <PageVerticalSpacing>
            <Grid
              container
              spacing={{ md: 3, xs: 2 }}
              // flexDirection="column"
            >
              <Grid item xs={12}>
                <Paper
                  sx={{
                    bgcolor: 'grey.900',
                    borderRadius: 2,
                    height: 220,
                    // width: 100,
                  }}
                />
              </Grid>
              <Grid container item columnSpacing={{ md: 3, xs: 2 }}>
                <Grid item xs={12}>
                  <Typography variant="h5">Performance</Typography>
                </Grid>

                <Grid item xs={6}>
                  <Paper
                    sx={{
                      borderRadius: 2,
                      height: 200,
                      padding: 2,
                    }}
                  >
                    <NoSsr>{/* <LineChart /> */}</NoSsr>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  {/* <Paper
                    sx={{
                      borderRadius: 2,
                      height: 200,
                      padding: 2,
                      // width: 100,
                    }}
                  > */}
                  {/* <Box sx={{ height: 200, width: 2000 }}>
                    <NoSsr>
                      <AreaBump />
                    </NoSsr>
                  </Box> */}

                  {/* </Paper> */}
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h5">Our favorite</Typography>
                <Box display="flex">
                  <FebCard image={{ src: '/coworking-space/art.jpg' }} />
                  <FebCard image={{ src: '/coworking-space/cat.jpg' }} />
                  <FebCard image={{ src: '/coworking-space/flower.jpg' }} />
                </Box>
              </Grid>
            </Grid>
          </PageVerticalSpacing>
        </Container>
      </Box>
    </>
  );
};

export default CoworkingSpaceView;
