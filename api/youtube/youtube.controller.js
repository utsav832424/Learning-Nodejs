const {getVideos,getVideosByID} = require("./youtube.service");

module.exports={
   getVideosC:(req,res)=>{
    var data = req.query;
    getVideos(data,(err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.status(200).json({
            success:1,
            message : results
         });
    });
   },
   getVideosByIDC:(req,res)=>{
    const id = req.params.id;
    getVideosByID(id,(err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.status(200).json({
            success:1,
            message : results
         });
    });
   }
}