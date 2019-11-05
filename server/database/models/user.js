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
    pool.query('SELECT user_information.*, user_login.username FROM `user_information`LEFT JOIN blood_type ON blood_type.blood_type_id = user_information.blood_type LEFT JOIN gender_type ON gender_type.gender_type_id = user_information.gender LEFT JOIN nationality ON nationality.nationality_id = user_information.citizenship LEFT JOIN marital_status ON marital_status.marital_status_id = user_information.marital_status LEFT JOIN employment_type ON employment_type.employment_type_id = user_information.employment_type LEFT JOIN position ON position.position_id = user_information.position LEFT JOIN user_status ON user_status.status_id = user_information.status LEFT JOIN branch ON branch.branch_id = user_information.branch_site LEFT JOIN role ON role.role_id = user_information.role_id LEFT JOIN family_relationship ON family_relationship.family_relationship_id = user_information.emergency_contact_relationship LEFT JOIN user_login ON user_information.user_id = user_login.user_id WHERE user_information.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserPosition = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT position.position_id, position.position from `user_information` Inner join position ON position.position_id = user_information.position WHERE user_information.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserNewFeed = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select newsfeed_access_type.* FROM user_information LEFT JOIN newsfeed_access_type ON newsfeed_access_type.id = user_information.newsfeed_access where user_information.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserTeamMember = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select team_member.* from `team_member` INNER JOIN team ON team.team_id = team_member.team_id where team_member.user_id = ? AND team_member.active = 1 ORDER BY team_member.member_id DESC LIMIT 1', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}




module.exports = userModelAndConnection