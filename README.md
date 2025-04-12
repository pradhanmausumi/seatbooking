# Seat Booking Application

This is a seat booking system for a train coach where users can register, log in, and reserve seats. The coach has 80 seats arranged in rows of 7, with the last row having 3 seats. A user can book up to 7 seats at a time. The system prioritizes booking all seats in a single row when possible. Booked seats cannot be reserved by others unless canceled or reset.

## Features

- **User Authentication**
  - Signup and login functionality
  - JWT-based authentication

- **Seat Booking System**
  - Reserve up to 7 seats per request
  - Prioritized row-wise booking
  - Nearby seat allocation if same-row booking not possible

- **Responsiveness**
  - Works across various devices and screen sizes

- **Error Handling**
  - Handles invalid inputs and unauthorized access
  - Clear and meaningful error messages

## Tech Stack

- **Frontend**: Next.js, React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT

## Project Setup

### Clone the Repository

```bash
git clone https://github.com/yourusername/seat-booking.git
cd seat-booking
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=seatbooking
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app.

## API Endpoints

### POST `/api/register`
Register a new user.

```json
{
  "username": "john_doe",
  "password": "password123"
}
```

### POST `/api/login`
Login and receive a token.

```json
{
  "username": "john_doe",
  "password": "password123"
}
```

### POST `/api/book`
Book available seats.

```json
{
  "userId": 1,
  "seatsToBook": 3
}
```



