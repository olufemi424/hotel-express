const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name~']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      //this only work on CREATE | SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Password are not the same!'
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
