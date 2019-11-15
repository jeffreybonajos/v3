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
    pool.query(`SELECT *
     from user_information 
     WHERE user_id = ?`, [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}
userModelAndConnection.getUserVaccine = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query(`Select employee_health_vaccine.id, health_record.name, 
    employee_health_vaccine.date_shot, employee_health_vaccine.date_next_shot, 
    health_vaccine_status.status_name, user_information.full_name, employee_health_vaccine.user_id
    FROM employee_health_vaccine
    LEFT JOIN health_record
      ON health_record.id = employee_health_vaccine.vaccine_id
    LEFT JOIN health_vaccine_status
      ON health_vaccine_status.id = employee_health_vaccine.status_id
    LEFT JOIN user_information 
      ON employee_health_vaccine.user_id = user_information.user_id
    WHERE employee_health_vaccine.user_id = ? AND employee_health_vaccine.date_archived IS NULL `, [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getUserResultDocuments = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query(`Select employee_health_result.id, employee_health_result_type.type, 
    employee_health_result.result_date, employee_health_result.description, 
    employee_health_result.result_img
    FROM employee_health_result
    LEFT JOIN employee_health_result_type
      ON employee_health_result_type.id = employee_health_result.result_type
    LEFT JOIN user_information
      ON employee_health_result.user_id = user_information.user_id
    WHERE employee_health_result.user_id = ? 
    AND employee_health_result.date_archived IS NULL `, [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}
userModelAndConnection.getUserNurseVisit = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT health_visit_history.*, nurse.full_name AS nurse_fullname , 
    health_record.name, emp.full_name AS employee_fullname, health_visit_action.action
    FROM health_visit_history
    LEFT JOIN health_record
      ON health_record.id = health_visit_history.finding_id
    LEFT JOIN user_information as nurse
      ON health_visit_history.nurse_id = nurse.user_id
    LEFT JOIN user_information as emp
      ON	health_visit_history.user_id = emp.user_id
    LEFT JOIN health_visit_action 
      ON health_visit_action.id = health_visit_history.action_id
    WHERE health_visit_history.user_id = ? AND health_visit_history.date_archived IS NULL`, [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}





module.exports = userModelAndConnection