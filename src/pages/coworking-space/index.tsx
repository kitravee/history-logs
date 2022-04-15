import Head from 'next/head';
import React from 'react';

import CoworkingSpaceView from '@/views/coworking-space-view';

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
