const { createcourse, getcoursebycourseId, getcourse, updatecourse, deletecourse,coursecover, getcoursecover,getcoursebycoursecoverId,updatecoursecover,deletecoursecover }  = require("./course.controller");
const router = require("express").Router();
const multer = require('multer');
var upload = multer().array();

// router.post("/",upload, createcourse);
router.get("/", getcourse);
router.get("/:id", getcoursebycourseId);
router.patch("/", updatecourse);
router.delete("/",deletecourse);
router.post("/coursecover",upload, coursecover);
router.get("/coursecover", getcoursecover);
router.get("/coursecover/:id", getcoursebycoursecoverId);
router.patch("/coursecover", updatecoursecover);
router.delete("/coursecover",deletecoursecover);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      var fileData = file.originalname.split('.');
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileData[fileData.length - 1])
    }
  });
  
  var fileupload = multer({storage:storage});
  router.post("/", fileupload.single('image'), createcourse);


module.exports = router;