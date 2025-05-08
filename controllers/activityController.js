import Activity from '../models/Activity.js';

// Get all activities (public endpoint)
export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
