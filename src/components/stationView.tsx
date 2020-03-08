import React from 'react';
import { Station } from '../types';

interface Props {
  station: Station;
}

const StationView: React.FC<Props> = ({ station }) => {
  const stationUpAndRunning =
    station.is_installed || (station.is_renting && station.is_returning);
  const bikesAvailableClass =
    station.num_bikes_available > 0 ? 'bg-success' : 'bg-light';
  const docksAvailableClass =
    station.num_docks_available > 0 ? 'bg-success' : 'bg-light';

  return (
    <div className="container border m-md-2">
      <div
        className={`row ${stationUpAndRunning ? 'bg-dark' : 'bg-secondary'}`}
      >
        <div className="col-sm text-light">{station.name}</div>
        <div className={`col-sm ${bikesAvailableClass}`}>
          Sykler {station.num_bikes_available}/{station.capacity}
        </div>
        <div className={`col-sm ${docksAvailableClass}`}>
          Parkering {station.num_docks_available}/{station.capacity}
        </div>
      </div>
    </div>
  );
};

export default StationView;
