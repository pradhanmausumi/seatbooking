import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-4 py-2 flex justify-between">
      <Link to="/" className="font-bold">SeatBooking</Link>
      <Link to="/book" className="hover:underline">Booking</Link>
    </nav>
  );
}
