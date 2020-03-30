import React from 'react';
import { render } from '@testing-library/react';
import StationView from './stationView';

const mockStation = {
  station_id: '1',
  name: 'Sesam stasjon',
  address: 'Drammensveien 1',
  lat: 90,
  lon: 0,
  capacity: 20,
  is_installed: 1,
  is_renting: 1,
  num_bikes_available: 4,
  num_docks_available: 8,
  last_reported: 1540219230,
  is_returning: 1,
};

describe('StationView', () => {
  it('shall render station name', () => {
    const { getByTestId } = render(<StationView station={mockStation} />);
    const element = getByTestId('stationName');
    expect(element.textContent).toBe('Sesam stasjon');
  });

  it('shall render station address', () => {
    const { getByTestId } = render(<StationView station={mockStation} />);
    const element = getByTestId('stationAddress');
    expect(element.textContent).toBe('Drammensveien 1');
  });

  it('shall render number of bikes available', () => {
    const { getByTestId } = render(<StationView station={mockStation} />);
    const element = getByTestId('bikesAvailable');
    expect(element.textContent).toBe('4');
  });

  it('shall render number of docks available', () => {
    const { getByTestId } = render(<StationView station={mockStation} />);
    const element = getByTestId('docksAvailable');
    expect(element.textContent).toBe('8');
  });
  it('shall render capacity', () => {
    const { getByTestId } = render(<StationView station={mockStation} />);
    const element = getByTestId('capacity');
    expect(element.textContent).toBe('20');
  });
});
