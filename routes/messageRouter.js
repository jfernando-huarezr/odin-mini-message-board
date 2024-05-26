var express = require("express");
var router = express.Router();
const { insertMessage } = require("../controllers/messageController");

/* GET users listing. */
router.post("/create", insertMessage);

module.exports = router;
