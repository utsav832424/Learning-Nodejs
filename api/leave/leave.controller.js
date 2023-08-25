const {getLeave,getLeaveByID,crateaLeave} = require("./leave.service");

module.exports={
    crateaLeaveC:(req,res)=>{
        var body = req.body;
        crateaLeave(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(200).json({
                    success:0,
                    data:"Leave is not added"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        })
    },
    getLeaveC:(req,res)=>{
    var data = req.query;
    getLeave(data,(err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.status(200).json({
            success:1,
            message : results.leave_date[results]
         });
    });
   },
   getLeaveByIDC:(req,res)=>{
    const id = req.params.id;
    getLeaveByID(id,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        var data = [];
            var obj = {};
            [...new Set(result.map((item) => item.leave_date))].forEach(element => {
                obj[element] = [];
                result.filter((x) => x.leave_date == element).forEach(dateElement => {
                    obj[element].push(dateElement);
                });
            });
            data.push(obj);
        return res.status(200).json({
            success:1,
            message : data[0]
         });
    });
   }
}