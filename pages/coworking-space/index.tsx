import CoworkingSpaceView from '@/views/coworking-space-view';
import React from 'react';
import Head from 'next/head';

const CoworkingSpace: React.FC = () => {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <CoworkingSpaceView />
    </>
  );
};

export default CoworkingSpace;
