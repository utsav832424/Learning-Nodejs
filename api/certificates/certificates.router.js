const { createuser,getAll } = require ("./certificates.controller");
const router = require("express").Router();
const multer = require('multer');
var upload = multer().array();

// router.post("/",upload,createUser);

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
  router.post("/", fileupload.single('image'), createuser);
  router.get("/:id", getAll);

module.exports = router;