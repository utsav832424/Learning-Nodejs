const pool = require("../../config/database");

module.exports = {
    crateaLeave:(data,callBack)=>{
        pool.query(`insert into leave_level(user_id,title,leave_name,leave_date)values(?,?,?,?)`,
        [
            data.user_id,
            data.title,
            data.leave_name,
            data.leave_date
        ],
        
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getLeave:(data,callBack)=>{
        pool.query(`SELECT * FROM leave_level where isActive=1 order by id desc`,
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        });
    },
    getLeaveByID:(id,callBack)=>{
        pool.query(`SELECT l.*,u.username FROM leave_level l JOIN user_login u on l.user_id=u.id where l.user_id=${id} and l.isActive=1 order by l.id desc`,
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results);
        }
        )
    }
}