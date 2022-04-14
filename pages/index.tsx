import { PageComponent } from '@/types/next-page';
import HomeView from '@/views/home-view';
import { Box } from '@mui/system';
import Head from 'next/head';

const Home: PageComponent = () => {
  // console.log(props);
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

// export const getServerSideProps: GetServerSideProps = async (_context) => {
//   return {
//     props: {
//       someProps: 'someProps',
//     },
//   };
// };

// export default Home;
