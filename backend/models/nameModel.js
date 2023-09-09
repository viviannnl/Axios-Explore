const mongoose = require('mongoose')

const nameSchema = mongoose.Schema({
    text: {
        type: String,
        require: [true, 'Please add a name']
    }
})

module.exports = mongoose.model('Name', nameSchema)