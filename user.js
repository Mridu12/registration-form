// models/user.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://Mridul:Mridul2431@cluster0.lz1q6ul.mongodb.net/Login?retryWrites=true&w=majority'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
