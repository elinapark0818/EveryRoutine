const express = require("express");
const router = express.Router();
const usersRouter = require("./users");

// TODO: Endpoint에 따라 적절한 Router로 연결해야 합니다.

router.use("/users", usersRouter);

module.exports = router;
