const express = require("express");
const {
  showIndexPage,
  showNewFormPage,
} = require("../controllers/indexController");

const router = express.Router();

/* GET home page. */
router.get("/", showIndexPage);
router.post("/newMessage", showNewFormPage);

module.exports = router;
