import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getSeats = () => API.get('/seats');
export const bookSeats = (seatCount) => API.post('/seats/book', { seats: seatCount });
export const resetSeats = () => API.post('/seats/reset');
