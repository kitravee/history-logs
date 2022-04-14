import CoworkingSpaceView from '@/views/coworking-space-view';
import React from 'react';
import Head from 'next/head';
// import { GetStaticProps, GetServerSideProps } from 'next';

const CoworkingSpaceId: React.FC = () => {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <CoworkingSpaceView />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (_context) => {
//   return {
//     props: {
//       someProps: 'someProps',
//     },
//   };
// };

// export const getServerSideProps: GetServerSideProps = async (_context) => {
//   return {
//     props: {
//       someProps: 'someProps',
//     },
//   };
// };

export default CoworkingSpaceId;
