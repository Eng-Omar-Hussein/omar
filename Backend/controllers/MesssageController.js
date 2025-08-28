const message=require("../models/MessageModel");
exports.sendMessage = async (req, res) => {
    try {
        const { Email, Name, Message } = req.body;

        const newMessage = new message({ from:Email, Name, text:Message });
        console.log(newMessage)
        await newMessage.save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
};

exports.getMessages = async (req, res) => {
    try {
        console.log("newMessage")
        
        const messages = await message.find();
        
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve messages" });
    }
};
