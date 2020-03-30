/* global global */
jest.mock('../components/dataMerger');
jest.mock('axios');

import fetchBikeData from './service';
import axios from 'axios';
import merge from '../components/dataMerger';

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockStations = [
  {
    station_id: '627',
    name: 'Skøyen Stasjon',
    address: 'Skøyen Stasjon',
    lat: 59.9226729,
    lon: 10.6788129,
    capacity: 20,
  },
];

const mockStationsStatus = [
  {
    is_installed: 1,
    is_renting: 1,
    num_bikes_available: 7,
    num_docks_available: 5,
    last_reported: 1540219230,
    is_returning: 1,
    station_id: '627',
  },
];

describe('bikedata service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('shall fetch bike data', async () => {
    mockedAxios.get
      .mockResolvedValueOnce({
        data: {
          data: {
            stations: mockStations,
          },
        },
      })
      .mockResolvedValueOnce({
        data: {
          data: {
            stations: mockStationsStatus,
          },
        },
      });
    await fetchBikeData();
    expect(merge).toHaveBeenCalledTimes(1);
    expect(merge).toBeCalledWith(mockStations, mockStationsStatus);
  });

  it('shall handle errors', async () => {
    const errorSpy = jest.spyOn(global.console, 'error');
    mockedAxios.get
      .mockReturnValueOnce(Promise.reject('Error stations'))
      .mockResolvedValueOnce({
        data: {
          data: {
            stations: mockStationsStatus,
          },
        },
      });
    await fetchBikeData();
    expect(errorSpy).toBeCalledWith('Error stations');
    expect(merge).toBeCalledWith(undefined, mockStationsStatus);
  });
});
