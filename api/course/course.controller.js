const { createcourse ,getcoursebycourseId,getcourse,updatecourse, deletecourse,coursecover, getcoursecover,getcoursebycoursecoverId,updatecoursecover,deletecoursecover }  = require("./course.service");
const { genSaltSync } = require("bcrypt");

module.exports = {
    createcourse:(req, res) => {
        const body = req.body;
        // console.log("req.file.path",req.file);
        // body.image = req.file.path;
        body.image = req.file.path.replace(/\\/g, '/');
        // console.log("body", body); 
        // console.log("path",path);
        createcourse(body, (err, results) => {
            // console.log("<< body >>>",body );
            if (err) {
                console.log(err);
                return res.status(500).json({ 
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "Course has been successfully added."
            });
        });
    },
    getcoursebycourseId: (req, res) => {
        const id = req.params.id;
        getcoursebycourseId(id, (err, results)=>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:"record not Found"
                });
            }
            return res.json({
                success:1,
                data:results
            });
            });
    },
    getcourse:(req, res) =>{
        getcourse((err, results)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log('results', results)
            return res.json({
                success:1,
                data:results
            });
        });
    },
    updatecourse:(req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        updatecourse(body,(err, results )=>{
            if (err) {
                console.log(err);
                return false;
            } 
           if (!results) {
                return res.json({
                    success:0,
                    message:"Failed to update course"
                })
           }
            return res.json({
                success:1,
                message:"updated successfully"
            });
        });
    },
    deletecourse:(req, res) => {
        const data = req.body;
        deletecourse(data,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:"record not Found"
                });
            }
            return res.json({
                success:1,
                message:"course deleted successfully"
            });
        });
    },
    coursecover:(req, res) => {
        const body = req.body;
        console.log("body", body);
        coursecover(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ 
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: "Course has been successfully added."
            });
        });
    },
    getcoursecover:(req, res) =>{
        getcoursecover((err, results)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log('results', results)
            return res.json({
                success:1,
                data:results
            });
        });
    },
   
    getcoursebycoursecoverId: (req, res) => {
        const id = req.params.id;
        getcoursebycoursecoverId(id, (err, results)=>{
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:"record not Found"
                });
            }
            return res.json({
                success:1,
                data:results
            });
            });
    },
    updatecoursecover:(req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        updatecoursecover(body,(err, results )=>{
            if (err) {
                console.log(err);
                return false;
            } 
           if (!results) {
                return res.json({
                    success:0,
                    message:"Failed to update course"
                })
           }
            return res.json({
                success:1,
                message:"updated successfully"
            });
        });
    },
    deletecoursecover:(req, res) => {
        const data = req.body;
        deletecoursecover(data,(err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:"record not Found"
                });
            }
            return res.json({
                success:1,
                message:"course deleted successfully"
            });
        });
    },

};
