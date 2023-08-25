const { mastercourse, getmastercourse, getmastercoursebymastercourseId, updatemastercourse, deletemastercourse } = require ("./mastercourse.service");
 const { genSaltSync} = require("bcrypt");

 const multer = require('multer')

module.exports = {
    mastercourse:(req, res) => {
        const body = req.body;
        body.image = req.file.path.replace(/\\/g, '/');
        console.log("body", body); 
        mastercourse(body, (err, results) => {
            console.log("<< body >>>",body );
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
    getmastercoursebymastercourseId: (req, res) => {
        const id = req.params.id;
        getmastercoursebymastercourseId(id, (err, results)=>{
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
    getmastercourse:(req, res) =>{
        getmastercourse((err, results)=>{
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
    updatemastercourse:(req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        updatemastercourse(body,(err, results )=>{
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
    deletemastercourse:(req, res) => {
        const data = req.body;
        deletemastercourse(data,(err, results) => {
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