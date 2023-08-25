const { create,getAll } = require("./banner.service");

module.exports = {
    create:(req, res) => {
        const body = req.body;
        body.image = req.file.path.replace(/\\/g, '/');
        console.log("body", body);
        create(body, (err, results) => {
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
                message: "careerboost has been successfully ."
            });
        });
    },
    getAll:(req, res) => {
        getAll((err, results) => {
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
                message: "careerboost has been successfully ."
            });
        });
    }
};