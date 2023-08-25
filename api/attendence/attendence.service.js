const pool = require("../../config/database");
var moment = require("moment");
module.exports={
    addAttendence:(data,callBack)=>{
        pool.query(`insert into attendence(user_id,start_time)values(?,?)`,
        [
            data.user_id,
            moment(new Date()).utcOffset('+0530').format('YYYY-MM-DD HH:mm')
        ],
        
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    updateAttendence:(data,callBack)=>{
        pool.query(`update attendence set end_time=? where user_id=${data} and date(start_time) = '${ moment(new Date()).format('YYYY-MM-DD')}'`,
        [
            moment(new Date()).utcOffset('+0530').format('YYYY-MM-DD HH:mm')
        ],
        
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getAttendence:(data,callBack)=>{
        pool.query(`SELECT *,DATE_FORMAT(start_time,'%d-%m-%Y')as today_date,ifnull(DATE_FORMAT(start_time,'%h:%i %p'),0)as startT,ifnull(DATE_FORMAT(end_time,'%h:%i %p'),0)as endT,ifnull(DATE_FORMAT(SEC_TO_TIME(TIMESTAMPDIFF(SECOND,start_time,end_time)),'%h:%i'),0) as minusd FROM attendence WHERE user_id=${data.id} ORDER BY id DESC LIMIT ${data.offset},${data.length}`,
        
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getDate:(id,callBack)=>{
        pool.query(`SELECT *from attendence where user_id=${id} and date(start_time) = '${ moment(new Date()).format('YYYY-MM-DD')}'`,
        
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
}