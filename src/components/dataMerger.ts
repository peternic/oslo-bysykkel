import { StationInformation, StatusStation, Station } from '../types';

const merge = (
  stations: Array<StationInformation>,
  statusStations: Array<StatusStation>
): Array<Station> => {
  if (!statusStations || statusStations.length === 0) {
    return [];
  }
  return stations?.map(station => {
    return Object.assign(
      {},
      station,
      statusStations
        ?.filter(status => status.station_id === station.station_id)
        .shift()
    );
  });
};

export default merge;
