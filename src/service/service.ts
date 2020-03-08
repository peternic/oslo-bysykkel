import fetch from 'isomorphic-unfetch';
import merge from '../components/dataMerger';
import { Station } from '../types';

const clientIdentifier = 'origotest-petersbesvarelse';

const fetchBikeData = async (): Promise<Array<Station>> => {
  const [stations, stationsStatus] = await Promise.all([
    fetch(
      'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
      {
        method: 'GET',
        headers: {
          'Client-Identifier': clientIdentifier,
        },
      }
    )
      .then(response => response.json())
      .catch(error => console.error(error)),
    fetch('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json', {
      method: 'GET',
      headers: {
        'Client-Identifier': clientIdentifier,
      },
    })
      .then(response => response.json())
      .catch(error => console.error(error)),
  ]);
  return merge(stations?.data?.stations, stationsStatus?.data?.stations);
};

export default fetchBikeData;
