const mongoose = require('mongoose');
const managerSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
      }
}, {
  timestamps: true
},{collection:"managers"});
module.exports = mongoose.model('Manager',managerSchema);