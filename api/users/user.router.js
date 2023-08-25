const { createUser, getUserByUserId, getUsers, updateUser, deleteUser,login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } =  require("../auth/token_validation");
const multer = require('multer');
var upload = multer().array();

router.post("/",checkToken, upload, createUser);
router.get("/",checkToken, getUsers);
router.get("/:id",checkToken, getUserByUserId);
router.patch("/", checkToken,updateUser);
router.delete("/",checkToken, deleteUser);
router.post("/login",upload,login);

module.exports = router;