const {mastercourse, getmastercourse, getmastercoursebymastercourseId, updatemastercourse, deletemastercourse } = require ("./mastercourse.controller");
const router = require("express").Router();
const multer = require('multer');
var upload = multer().array();

// router.post("/",upload, mastercourse);
router.get("/", getmastercourse);
router.get("/:id", getmastercoursebymastercourseId);
router.patch("/", updatemastercourse);
router.delete("/",deletemastercourse);

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
  router.post("/", fileupload.single('image'), mastercourse);

module.exports = router;