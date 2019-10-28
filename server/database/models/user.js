const pool = require('../config/index')


let userModelAndConnection = {};

userModelAndConnection.findByCredentials = ( username, password ) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * from user_login WHERE username = ? AND password = ?', [username, password], function(error, result, fields) {
      if(error){
        return reject(error);
      }
      return resolve(result[0]);
    });
  });
};

userModelAndConnection.getUserProfile = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * from user_information WHERE user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}




module.exports = userModelAndConnection