const router = require("express").Router();
const controller = require("../controllers/personal_routines");

router.get("/", controller.user_routine.get);
router.post("/", controller.user_routine.post);
router.patch("/", controller.user_routine.patch);

module.exports = router;
