import { Box } from '@mui/system';
import Head from 'next/head';

import { PageComponent } from '@/types/next-page';
import HomeView from '@/views/home-view';

const Home: PageComponent = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <HomeView />
    </>
  );
};

Home.getLayout = (page) => {
  return <Box sx={{ bgcolor: 'background.default' }}>{page}</Box>;
};

Home.auth = false;

export default Home;
