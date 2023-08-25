const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            'insert into banner(image)values(?)',
            [
                data.image,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },
    getAll:(callBack) => {
        pool.query(
            'select *  from banner',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}