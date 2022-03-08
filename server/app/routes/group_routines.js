const router = require("express").Router();
const controller = require("../controllers/group_routines");

router.get("/test", controller.test.get);


module.exports = router;
