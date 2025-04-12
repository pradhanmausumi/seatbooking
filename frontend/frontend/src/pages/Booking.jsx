import SeatGrid from "../components/SeatGrid";

export default function Booking() {
  return (
    <div>
      <h2>🎟️ Book Your Seats</h2>
      <input type="number" placeholder="Enter number" />
      <button>Book</button>
      <button>Reset</button>

      {/* Render SeatGrid below */}
      <SeatGrid />
    </div>
  );
}
