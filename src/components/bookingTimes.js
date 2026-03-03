const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const getAvailableTimes = (date) => {
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }

  return defaultTimes;
};

export function initializeTimes() {
  return getAvailableTimes(new Date());
}

export function updateTimes(state, selectedDate) {
  if (!selectedDate) {
    return state;
  }

  return getAvailableTimes(new Date(selectedDate));
}
