const Room = require('../models/room');
const mongoose = require('mongoose');

const dbConnect = require('../config/dbConnect');

const rooms = require('../data/rooms.json');

mongoose.connect('mongodb://localhost:27017/bookit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log('All rooms deleted');

    await Room.insertMany(rooms);
    console.log('Added all rooms');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
