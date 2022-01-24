const mongoose = require("mongoose");
const VehicleType = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
  },
  {
    timestamps: true,
  },
  { collection: "vehicletypes" }
);
module.exports = mongoose.model("VehicleType", VehicleType);
