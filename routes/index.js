const express = require("express");
const message_index = require("../controllers/messageController");

const router = express.Router();

/* GET home page. */
router.get("/", message_index);

module.exports = router;
