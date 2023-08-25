const pool = require("../../config/database");
var moment = require('moment');

module.exports = {
    mastercourse: (data, callBack) => {
        pool.query(
            'insert into mastercourse(name, image, month, added_datetime)values(?,?,?,?)',
            [
                data.name,
                data.image,
                data.month,
                moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },
    getmastercourse: callBack => {
        pool.query(
            'SELECT *,(SELECT COUNT(*) FROM course c WHERE c.master_course_id = mc.id) as course FROM `mastercourse` mc',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getmastercoursebymastercourseId: (id, callBack) => {
        pool.query(
            'select id,name, image, month, added_datetime from mastercourse where id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updatemastercourse: (data, callBack) => {
        pool.query(
            'update mastercourse set name = ?, image = ?, month = ?, isactive = ? where id = ? ',
            [
                data.name,
                data.image,
                data.month,
                data.isactive,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletemastercourse: (data, callBack) => {
        pool.query(
            'delete from mastercourse where id = ?',
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
};
