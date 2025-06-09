// C:\Users\hemachandiran.r\AppData\Local\MCPApp\backend\modules\admcp\server.js
const express = require("express");
const path = require("path");
const authControllerAD = require("./authControllerAD");

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello from ADMCP!");
});

router.use(express.static(path.join(__dirname, "../../../frontend/app/admcp/dist")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/app/admcp/dist/", "index.html"));
});

router.get("/login", authControllerAD.login);



module.exports = router;
