import { initializeTimes, updateTimes } from './bookingTimes';

test('initializeTimes returns expected default times', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state value', () => {
  const times = ['17:00', '18:00'];
  expect(updateTimes(times, '2026-03-02')).toEqual(times);
});
