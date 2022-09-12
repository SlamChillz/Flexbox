const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    track: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Profile', ProfileSchema);