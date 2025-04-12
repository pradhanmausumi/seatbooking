# Seat Booking Application

This is a seat booking system for a train coach where users can log in, register, and reserve seats in a train coach. The coach contains 80 seats, with 7 seats per row, except for the last row which has only 3 seats. The application allows users to book up to 7 seats at a time, prioritizing bookings in the same row and ensuring no overlapping bookings. The backend is powered by Node.js and Express, while the frontend is built with Next.js. The database is managed using PostgreSQL.

## Features

- **User Authentication**: 
  - User Registration
  - User Login (JWT-based)
  
- **Seat Booking**: 
  - Book up to 7 seats at a time
  - Seats are booked in rows first, then scattered if necessary
  - Once a seat is booked, it can't be reserved by another user
  
- **Responsive D