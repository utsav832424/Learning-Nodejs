const { create,getAll } = require("./recipe.service");

module.exports = {
    createuser:(req, res) => {
        const body = req.body;
        body.image = req.file.path.replace('\\','/');
        console.log("body", body); 
        create(body, (err, results) => {
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
                message: "recipe has been successfully added."
            });
        });
    },
    getAll:(req, res) => {
        const id = req.params.id;
        getAll(id,(err, results) => {
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
                message: "recipe has been successfully ."
            });
        });
    }
};