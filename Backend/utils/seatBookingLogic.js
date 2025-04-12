// ✅ ES Module export style
export function allocateSeats(requestedSeats, seats) {
  const allocated = [];

  for (let i = 0; i < seats.length && allocated.length < requestedSeats; i++) {
    if (!seats[i].isBooked) {
      allocated.push(seats[i]);
    }
  }

  return allocated;
}
