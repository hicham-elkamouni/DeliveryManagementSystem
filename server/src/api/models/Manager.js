const mongoose = require('mongoose');
import User from "./User"
const managerSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
},
{
  timestamps: true
}, { collection: "managers" });

  managerSchema.pre('remove', async function (next) {
    await User.deleteOne({ _id: this.user })
    next()
  })
module.exports = mongoose.model('Manager', managerSchema);