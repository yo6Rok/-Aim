const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    username: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
