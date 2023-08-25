const { createUser,getAll } = require ("./job.controller");
const router = require("express").Router();
const multer = require('multer');
var upload = multer().array();

router.post("/",upload,createUser);
router.get("/", getAll);

module.exports = router;