const mongoose = require('mongoose');
import User from "./User"
const driverSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true
}, { collection: "drivers" });

driverSchema.pre('remove', async function (next) {
  var driver = this
  await User.deleteOne({ _id: driver.user })
  next()
})

module.exports = mongoose.model('Driver', driverSchema);