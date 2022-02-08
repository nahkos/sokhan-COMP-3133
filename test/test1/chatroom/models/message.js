const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    msg: {
        type: String,
        required: true
    },
    // chatroom: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: "Chatroom is required!",
    //     ref: "Chatroom",
    //   },
    //   user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: "Chatroom is required!",
    //     ref: "User",
    //   },
})

const Msg = mongoose.model('msg', msgSchema);
module.exports = Msg;