const Message = require("../models/message");

class MessageDAO {
  async getAllMessages() {
    try {
      const messages = await Message.find().sort({ updatedAt: -1 }).exec();
      return messages;
    } catch (err) {
      console.log(err);
    }
  }

  async insertMessage(title, user, content) {
    try {
      const newMessage = new Message({ title, user, content });
      await newMessage.save();
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { MessageDAO };
