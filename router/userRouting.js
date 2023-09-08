const { signUp, logout, login, forgot } = require("../controller/userController");
const validate = require("../midllerware/usermidller");

const router = require("express").Router();

router.get("/api/login", login)
router.get("/api/signup/:age", validate, signUp)
router.get("/api/logout", logout)
router.get("/api/forgot", forgot)
module.exports = router;