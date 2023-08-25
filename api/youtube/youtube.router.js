const {getVideosC,getVideosByIDC} = require("./youtube.controller");
const router = require("express").Router();
const multer = require('multer');
var upload = multer().array();

router.get("/getVideos",getVideosC);
router.get("/getVideosByid/:id",getVideosByIDC);

module.exports=router;