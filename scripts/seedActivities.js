import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
dotenv.config();

connectDB().then(async () => {
  await Activity.deleteMany();

  await Activity.insertMany([
    {
      title: 'Cricket Match',
      description: 'Friendly local match',
      location: 'Stadium A',
      date: new Date('2025-05-10'),
      time: '10:00 AM'
    },
    {
      title: 'Movie Night',
      description: 'Outdoor movie screening',
      location: 'Park B',
      date: new Date('2025-05-11'),
      time: '7:00 PM'
    },
    {
        title: 'Football Match',
        description: 'Gully match',
        location: 'FUFC Ground',
        date: new Date('2025-05-12'),
        time: '9:00 PM'
      }
  ]);
  console.log('Activities seeded successfully!');

});
