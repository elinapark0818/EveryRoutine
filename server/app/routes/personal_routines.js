const router = require("express").Router();
const controller = require("../controllers/personal_routines");

router.get("/user-routine", controller.user_routine.get);
router.post("/user-routine", controller.user_routine.post);
router.patch("/user-routine", controller.user_routine.patch);

module.exports = router;
