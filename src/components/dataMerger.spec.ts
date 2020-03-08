import merge from './dataMerger';
import { Station } from '../types';

describe('dataMerger', () => {
  it('shall merge simple lists of GBSF objects', () => {
    const result: Array<Station> = merge(
      [
        {
          station_id: '627',
          name: 'Skøyen Stasjon',
          address: 'Skøyen Stasjon',
          lat: 59.9226729,
          lon: 10.6788129,
          capacity: 20,
        },
      ],
      [
        {
          is_installed: 1,
          is_renting: 1,
          num_bikes_available: 7,
          num_docks_available: 5,
          last_reported: 1540219230,
          is_returning: 1,
          station_id: '627',
        },
      ]
    );
    expect(result).toMatchObject([
      {
        station_id: '627',
        name: 'Skøyen Stasjon',
        address: 'Skøyen Stasjon',
        lat: 59.9226729,
        lon: 10.6788129,
        capacity: 20,
        is_installed: 1,
        is_renting: 1,
        num_bikes_available: 7,
        num_docks_available: 5,
        last_reported: 1540219230,
        is_returning: 1,
      },
    ]);
  });
});
