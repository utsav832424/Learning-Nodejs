const {addAttendenceC,updateAttendenceC,getAttendenceC} = require("./attendence.controller");
const router = require("express").Router();
const multer = require("multer");
var upload = multer().array();

router.post("/checkin",upload,addAttendenceC);
router.post("/checkout/:id",upload,updateAttendenceC);
router.get("/getAttendence/:id",upload,getAttendenceC);

module.exports=router;
