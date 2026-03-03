import { initializeTimes, updateTimes } from './bookingTimes';

const mockFetchAPI = jest.fn(() => ['17:00', '18:00']);

beforeEach(() => {
  window.fetchAPI = mockFetchAPI;
});

afterEach(() => {
  delete window.fetchAPI;
  mockFetchAPI.mockClear();
});

test('initializeTimes returns expected default times', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00']);
  expect(mockFetchAPI).toHaveBeenCalledTimes(1);
});

test('updateTimes returns the same state value', () => {
  const times = ['17:00', '18:00'];
  expect(updateTimes(times, '2026-03-02')).toEqual(['17:00', '18:00']);
  expect(mockFetchAPI).toHaveBeenCalledTimes(2);
});
