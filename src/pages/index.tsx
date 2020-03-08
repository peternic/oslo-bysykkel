import { NextPage } from 'next';
import React from 'react';
import { Station } from '../types';
import fetchBikeData from '../service/service';
import StationView from '../components/stationView';

interface Props {
  result: Array<Station>;
}

const App: NextPage<Props> = ({ result }) => {
  const stations = result.map((it: Station) => (
    <StationView station={it} key={it.station_id} />
  ));
  return <>{stations}</>;
};

App.getInitialProps = async () => {
  const result = await fetchBikeData();
  return { result };
};

export default App;
