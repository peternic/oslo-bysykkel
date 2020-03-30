/* global process */
import axios from 'axios';
import merge from '../components/dataMerger';
import { Station } from '../types';

const clientIdentifier = 'origotest-petersbesvarelse';
const baseUrl =
  process.env.baseUrl || 'https://gbfs.urbansharing.com/oslobysykkel.no';

const fetchBikeData = async (): Promise<Array<Station>> => {
  const [stations, stationsStatus] = await Promise.all([
    axios
      .get(`${baseUrl}/station_information.json`, {
        method: 'GET',
        headers: {
          'Client-Identifier': clientIdentifier,
        },
      })
      .then(response => response.data)
      .catch(error => console.error(error)),
    axios
      .get(`${baseUrl}/station_status.json`, {
        method: 'GET',
        headers: {
          'Client-Identifier': clientIdentifier,
        },
      })
      .then(response => response.data)
      .catch(error => console.error(error)),
  ]);
  return merge(stations?.data?.stations, stationsStatus?.data?.stations);
};

export default fetchBikeData;
