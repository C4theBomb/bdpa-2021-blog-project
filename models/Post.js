const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema)