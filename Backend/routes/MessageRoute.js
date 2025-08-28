const express= require("express");
const router = express.Router();

const { 
    sendMessage,
    getMessages,
} = require("../controllers/MesssageController");

router.get("/messages", getMessages);
router.post("/messages", sendMessage);

module.exports = router;
