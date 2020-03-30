import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Station } from '../types';
import StationView from './stationView';

interface Props {
  stations: Array<Station>;
}

const MapView: React.FC<Props> = ({ stations }) => {
  return (
    <div className="map-root">
      <Map center={[59.9189978, 10.7362189]} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station, index) => {
          const bikesAvailableClass =
            station.num_bikes_available > 0 ? 'bg-success' : 'bg-light';
          const docksAvailableClass =
            station.num_docks_available > 0 ? 'bg-success' : 'bg-light';
          const div = divIcon({
            iconSize: [37, 23],
            iconAnchor: [12.5, 36],
            className: 'leaflet-div-icon arrow_box',
            html: `
                    <table class="statusTable" data-testid="mapMarker-${station.station_id}">
                      <tr>
                        <td class="${bikesAvailableClass}" data-testid="markerBikesAvailable">${station.num_bikes_available}</td>
                        <td class="${docksAvailableClass}" data-testid="markerDocksAvailable">${station.num_docks_available}</td>
                      </tr>
                    </table>
                   `,
          });
          return (
            <Marker
              key={index}
              position={[station.lat, station.lon]}
              icon={div}
            >
              <Popup>
                <StationView station={station} />
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default MapView;
