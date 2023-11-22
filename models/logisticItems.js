const mongoose = require('mongoose');

const logisticItemSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    status: {
        type: String,
        required:true
    }
});

const LogisticItem = mongoose.model('LogisticItem' , logisticItemSchema);

module.exports = LogisticItem;