// seatController.js

// Example function: getSeats
export async function getSeats(req, res) {
  try {
    // Logic to get seats
    res.status(200).json({ seats: [] }); // placeholder
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// Example function: bookSeats
export async function bookSeats(req, res) {
  try {
    // Logic to book seats
    res.status(200).json({ message: 'Seats booked successfully' }); // placeholder
  } catch (error) {
    res.status(500).json({ error: 'Booking failed' });
  }
}

// ✅ New function: resetSeats
export async function resetSeats(req, res) {
  try {
    // Logic to reset seats
    res.status(200).json({ message: 'Seats reset successfully' }); // placeholder
  } catch (error) {
    res.status(500).json({ error: 'Reset failed' });
  }
}
