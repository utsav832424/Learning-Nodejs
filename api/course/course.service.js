const pool = require("../../config/database");
var moment = require('moment');

module.exports = {
    createcourse: (data, callBack) => {
        console.log("data",data);
        pool.query(
            'insert into course(name,master_course_id, image, description, opportunity,isactive, added_datetime)values(?,?,?,?,?,?,?)',
            [
                data.name,
                data.master_course_id,
                data.image,
                data.description,
                data.opportunity,
                data.isactive,
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
    getcourse: callBack => {
        pool.query(
            'select *  from course',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcoursebycourseId: (id, callBack) => {
        pool.query(
            'select id,name, image, description, opportunity, isactive, added_datetime from course where master_course_id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatecourse: (data, callBack) => {
        pool.query(
            'update course set image = ?, description = ?, opportunity = ?, isactive = ?, added_datetime = ? where id = ? ',
            [
                data.image,
                data.description,
                data.opportunity,
                data.isactive,
                data.added_datetime,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );

    },
    deletecourse: (data, callBack) => {
        pool.query(
            'delete from course where id = ?',
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    coursecover: (data, callBack) => {
        pool.query(
            'insert into coursecover(course_id, name, description,isactive, added_datetime)values(?,?,?,?,?)',
            [
                data.course_id,
                data.name,
                data.description,
                data.isactive,
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
    getcoursecover: callBack => {
        pool.query(
            'select *  from coursecover',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getcoursebycoursecoverId: (id, callBack) => {
        pool.query(
            'select id, name, description, isactive, added_datetime from coursecover where course_id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatecoursecover: (data, callBack) => {
        pool.query(
            'update course set name = ?, description = ?, isactive = ?, added_datetime = ? where id = ? ',
            [
                data.name,
                data.description,
                data.isactive,
                data.added_datetime,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletecoursecover: (data, callBack) => {
        pool.query(
            'delete from course where id = ?',
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