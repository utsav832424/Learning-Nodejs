const pool = require("../../config/database");
var moment = require('moment');

module.exports = {
  create: (data, callBack) => {
    pool.query(
      'insert into user_login(username,email,password,added_datetime) values(?,?,?,?)',
      [
        data.username,
        data.email,
        data.password,
        moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      'select * FROM user_login',
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log('query results', results)
        return callBack(null, results);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      'select id,firstname,lastname,gender,email,number FROM user_login where id = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      'update user_login set username = ?, email = ?, password = ?, isactive = ?, added_datetime = ?,where id = ? ',
      [
        data.username,
        data.email,
        data.password,
        data.isactive,
        data.added_datetime,
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
  deleteUser:(data, callBack) => {
    pool.query(
      'delete from user_login where id = ?',
      [data.id],
      (error, results, fields) => {
        if (error) {
        return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },  
  getUserByUserEmail:(email, callBack) => {
    pool.query(
      'select *  from user_login where email = ?',
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};