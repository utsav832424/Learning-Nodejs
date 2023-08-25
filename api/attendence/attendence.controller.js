const {addAttendence,updateAttendence,getAttendence,getDate} = require("./attendence.service");

module.exports={
    addAttendenceC:(req,res)=>{
        var body = req.body;
        addAttendence(body,(err,results)=>{
            if(err){
                return res.status(200).json({
                    success:0,
                    data:"Attendence is not added."
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    updateAttendenceC:(req,res)=>{
        var id = req.params.id;
        updateAttendence(id,(err,results)=>{
            if(err){
                return res.status(200).json({
                    success:0,
                    data:"Attendence is not updated."
                });
            }
            if(!results){
                return res.status(200).json({
                    success:0,
                    data:"Checkout is not updated."
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    getAttendenceC:(req,res)=>{
        var id = req.params.id;
        var data = req.query;
        getDate(id,(err,results)=>{
            if(err){
                return res.status(200).json({
                    success:0,
                    data:"Attendence is not Fetch."
                });
            }
            getAttendence({...data,id},(err1,result)=>{
                if(err1){
                    return res.status(200).json({
                        success:0,
                        data:"Attendence is not Fetch."
                    });
                }
                var status=0;
                if(results.length>0){
                    status=results[0]['end_time']==null ? 1 : 2;
                }
                return res.status(200).json({
                    success:1,
                    data:result,
                    press:status
                });
            });
        });
       
    }
}