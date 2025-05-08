import Booking from '../models/Booking.js';
import Activity from '../models/Activity.js';

export const bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;

    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    const booking = new Booking({
      user: req.user._id,
      activity: activityId
    });

    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMyBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({ user: req.user._id }).populate('activity');
      const result = bookings.map(b => ({
        id: b._id,
        title: b.activity.title,
        description: b.activity.description,
        location: b.activity.location,
        date: b.activity.date,
        time: b.activity.time
      }));
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  