import React from 'react';
import { Station } from '../types';

interface Props {
  station: Station;
}

const StationView: React.FC<Props> = ({ station }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <h5 data-testid="stationName">{station.name}</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-testid="stationAddress">{station.address}</td>
          </tr>
          <tr>
            <td>Sykler</td>
            <td className="text-right" data-testid="bikesAvailable">
              {station.num_bikes_available}
            </td>
          </tr>
          <tr>
            <td>Parkering</td>
            <td className="text-right" data-testid="docksAvailable">
              {station.num_docks_available}
            </td>
          </tr>
          <tr>
            <td>Kapasitet</td>
            <td className="text-right" data-testid="capacity">
              {station.capacity}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StationView;
