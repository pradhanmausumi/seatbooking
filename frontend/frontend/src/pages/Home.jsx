import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">Welcome to Seat Booking System</h1>
      <Link to="/book" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded">
        Book Seats
      </Link>
    </div>
  );
}
