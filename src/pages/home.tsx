import React from 'react';
import { Banner } from '../components/Banner';
import { DataList } from '../components/DataList';

export function Home() {
    return (
      <>
        <main className='kasa-main'>
          <Banner/>
          <DataList/>
        </main>
      </>
    );
  }