import React from "react";

const seats = Array.from({ length: 70 }, (_, i) => ({
  number: i + 1,
  booked: false,
}));

export default function SeatGrid() {
  return (
    <div className="seat-grid">
      {seats.map((seat) => (
        <div
          key={seat.number}
          className={`seat ${seat.booked ? "booked" : ""}`}
        >
          {seat.number}
        </div>
      ))}
    </div>
  );
}
