const { MessageDAO } = require("../dao/messageDAO");

const insertMessage = async (req, res) => {
  const objMessageDAO = new MessageDAO();
  const { title, user, content } = req.body;

  try {
    await objMessageDAO.insertMessage(title, user, content);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { insertMessage };
