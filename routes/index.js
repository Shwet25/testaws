const express = require("express");
const router = express.Router();

const routes = require("./router");

router.use("/aws", routes);

module.exports = router;
