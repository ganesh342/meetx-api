import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const Activity = mongoose.model('Activity', activitySchema);

export default Activity;
