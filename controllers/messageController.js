const Message = require("../models/message");

const message_index = async (req, res) => {
  try {
    const messages = await Message.find().sort({ updatedAt: -1 }).exec();
    res.render("index", { messages, title: "Message Board" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = message_index;
