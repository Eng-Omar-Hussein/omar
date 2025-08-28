const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    from: { type: String, required: true },
    Name: { type: String, required: true },
    text: { type: String, required: true }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
