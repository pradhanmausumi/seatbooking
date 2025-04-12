// backend/models/Seat.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Seat = sequelize.define('Seat', {
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  isBooked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  bookedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Seat;
