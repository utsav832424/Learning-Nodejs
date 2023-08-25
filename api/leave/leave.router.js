const {crateaLeaveC,getLeaveByIDC,getLeaveC} = require("./leave.controller");
const router = require("express").Router();
const multer = require('multer');
var upload = multer().array();

router.post("/addleave",upload,crateaLeaveC);
router.get("/getLeaveC",getLeaveC);
router.get("/getLeaveByIDC/:id",getLeaveByIDC);

module.exports = router;