const { MessageDAO } = require("../dao/messageDAO");

const showIndexPage = async (req, res) => {
  const objMessageDAO = new MessageDAO();
  console.log("going index");

  try {
    //get all messages
    const messages = await objMessageDAO.getAllMessages();
    //render index page
    res.render("index", { messages, title: "Message Board" });
  } catch (err) {
    console.log(err);
  }
};

const showNewFormPage = (req, res) => {
  console.log("going new message");
  try {
    res.render("newForm", { title: "New Message" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { showIndexPage, showNewFormPage };
