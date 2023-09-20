const express = require("express");
const router = express.Router();
const { create, getData } = require("../controller/user");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", create).get("/", getData);

module.exports = { router };
