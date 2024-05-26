const Message = require("../models/message");

class MessageDAO {
  async getAllMessages() {
    const messages = await Message.find().sort({ updatedAt: -1 }).exec();
    return messages;
  }

  async insertMessage(title, user, content) {
    const newMessage = new Message({ title, user, content });
    await newMessage.save();
  }
}

module.exports = { MessageDAO };
