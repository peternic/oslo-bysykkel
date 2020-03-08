import fetch from 'isomorphic-unfetch';
import merge from '../components/dataMerger';
import { Station } from '../types';

const clientIdentifier = 'origotest-petersbesvarelse';

const fetchBikeData = async (): Promise<Array<Station>> => {
  const [stationsResponse, statusResponse] = await Promise.all([
    fetch(
      'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
      {
        method: 'GET',
        headers: {
          'Client-Identifier': clientIdentifier,
        },
      }
    ),
    fetch('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json', {
      method: 'GET',
      headers: {
        'Client-Identifier': clientIdentifier,
      },
    }),
  ]);

  const [stations, stationsStatus] = await Promise.all([
    stationsResponse.json(),
    statusResponse.json(),
  ]);

  return merge(stations.data?.stations, stationsStatus.data?.stations);
};

export default fetchBikeData;
