const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'member',
    },
    posts: [],
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', UserSchema);
