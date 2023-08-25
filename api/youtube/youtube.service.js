const pool = require("../../config/database");
var moment = require('moment');

module.exports = {
    getVideos:(data,callBack)=>{
        pool.query(`SELECT * FROM youtube where isActive=1 LIMIT ${data.offset},${data.length}`,
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getVideosByID:(id,callBack)=>{
        pool.query(`SELECT * FROM youtube where id=${id} and isActive=1`,
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        }
        )
    }
}