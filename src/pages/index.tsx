import { NextPage } from 'next';
import React from 'react';
import { Station } from '../types';
import fetchBikeData from '../service/service';

import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('../components/map'), {
  ssr: false,
});

interface Props {
  result: Array<Station>;
}

const App: NextPage<Props> = ({ result }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <h4>Oslo Bysykkel</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <MapView stations={result} />
        </div>
      </div>
    </div>
  );
};

App.getInitialProps = async () => {
  const result = await fetchBikeData();
  return { result };
};

export default App;
