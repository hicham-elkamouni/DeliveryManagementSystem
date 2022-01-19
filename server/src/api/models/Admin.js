import mongoose from 'mongoose';
const { Schema } = mongoose;
const admins = mongoose.model('admins', new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: { type: Date, default: Date.now },
}));

export default class Admin {

  constructor(email, password, username, id) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  login() {
    return new Promise((resolve, reject) => {
      admins.findOne({ email: this.email }).exec()
        .then((res) => { resolve(res); })
        .catch((err) => { reject(err); })
    });
  }

  register() {
    return new Promise((resolve, reject) => {
      admins.findOne({ email: this.email }).exec()
        .then((res) => { resolve(res); })
        .catch((err) => { reject(err); })
    });
  }
}

