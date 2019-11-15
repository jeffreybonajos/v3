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
    pool.query('SELECT user_information.*, user_login.username, branch.branch, blood_type.blood_type, gender_type.gender_type, marital_status.marital_status, employment_type.employment_type, position.position, user_status.status, role.role_type, team.team_name FROM `user_information`LEFT JOIN blood_type ON blood_type.blood_type_id = user_information.blood_type LEFT JOIN gender_type ON gender_type.gender_type_id = user_information.gender LEFT JOIN nationality ON nationality.nationality_id = user_information.citizenship LEFT JOIN marital_status ON marital_status.marital_status_id = user_information.marital_status LEFT JOIN employment_type ON employment_type.employment_type_id = user_information.employment_type LEFT JOIN position ON position.position_id = user_information.position LEFT JOIN user_status ON user_status.status_id = user_information.status LEFT JOIN branch ON branch.branch_id = user_information.branch_site LEFT JOIN role ON role.role_id = user_information.role_id LEFT JOIN family_relationship ON family_relationship.family_relationship_id = user_information.emergency_contact_relationship LEFT JOIN team ON team.department_id = user_information.department_id JOIN user_login ON user_information.user_id = user_login.user_id WHERE user_information.user_id = ?', [user_id], function (error, result, fields) {
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

userModelAndConnection.getUserTeamId = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select team_member.team_id from `team_member` INNER JOIN team ON team.team_id = team_member.team_id where team_member.user_id = ? AND team_member.active = 1 ORDER BY team_member.member_id DESC LIMIT 1', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserTeamMembers = (team_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select team_member.*, user_information.full_name, position.position, user_information.profile_picture, team.team_name from `team_member` INNER JOIN user_information ON user_information.user_id = team_member.user_id inner join position on position.position_id = user_information.position Inner join user_status on user_status.status_code = user_information.status inner join team  on team.team_id = team_member.team_id where team_member.team_id = ? AND team_member.active = 1', [team_id], function (error, result) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getUserHealthTracker = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select employee_health_vaccine.id, health_record.name, employee_health_vaccine.date_shot, employee_health_vaccine.date_next_shot, health_vaccine_status.status_name, user_information.full_name, employee_health_vaccine.user_id FROM employee_health_vaccine LEFT JOIN health_record ON health_record.id = employee_health_vaccine.vaccine_id LEFT JOIN health_vaccine_status ON health_vaccine_status.id = employee_health_vaccine.status_id LEFT JOIN user_information ON employee_health_vaccine.user_id = user_information.user_id WHERE employee_health_vaccine.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getResultDocuments = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select employee_health_result.id, employee_health_result_type.type, employee_health_result.result_date, employee_health_result.description, employee_health_result.result_img FROM employee_health_result LEFT JOIN employee_health_result_type ON employee_health_result_type.id = employee_health_result.result_type LEFT JOIN user_information ON employee_health_result.user_id = user_information.user_id WHERE employee_health_result.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getNurseVisit = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT health_visit_history.*, nurse.full_name, health_record.name, emp.last_name, emp.first_name, health_visit_action.action FROM health_visit_history LEFT JOIN health_record ON health_record.id = health_visit_history.finding_id LEFT JOIN user_information as nurse ON health_visit_history.nurse_id = nurse.user_id LEFT JOIN user_information as emp ON	health_visit_history.user_id = emp.user_id LEFT JOIN health_visit_action  ON health_visit_action.id = health_visit_history.action_id WHERE health_visit_history.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getUserTransactions = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('Select employee_transaction.* from `employee_transaction` Inner join user_information ON user_information.user_id = employee_transaction.user_id where user_information.user_id = ? ', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getUserSchedule = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT team_scheduler.* from team_scheduler INNER JOIN team_member ON team_scheduler.team_id = team_member.team_id WHERE team_member.user_id = ? AND team_member.active = 1 ', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserSalaryDetails = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT employee_salary_details.* , user_information.full_name, user_information.pag_ibig, user_status.status, (SELECT COUNT(*) FROM employee_salary_detail_history  WHERE employee_salary_detail_history.employee_id = employee_salary_details.employee_id) FROM employee_salary_details INNER JOIN user_information ON user_information.user_id = employee_salary_details.employee_id INNER JOIN user_status ON user_information.status = user_status.status_id WHERE employee_salary_details.employee_id = ? ', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserIncentives = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT incentive_recipient.* FROM incentive_recipient INNER JOIN incentive ON incentive_recipient.incentive_id = incentive.id WHERE incentive_recipient.granted = 1 AND incentive_recipient.employee_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserHMOplan = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT eh.*, h_g.hmo_plan, h_g.hmo_monthly, h_s.hmo_plan, h_s.hmo_monthly FROM employee_hmo AS eh INNER JOIN hmo AS h_g ON eh.hmo_id = h_g.hmo_id INNER JOIN hmo AS h_s ON eh.selected_hmo_id = h_s.hmo_id WHERE eh.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result[0])
    })
  })
}

userModelAndConnection.getUserHMOdependent = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT employee_dependent.*, hmo.hmo_plan, hmo.hmo_monthly FROM employee_dependent_hmo INNER JOIN hmo ON employee_dependent_hmo.hmo_id = hmo.hmo_id INNER JOIN employee_dependent ON employee_dependent.dependent_id = employee_dependent_hmo.dependent_id WHERE employee_dependent.user_id = ?', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}

userModelAndConnection.getUserLoans = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT loan.*, loan_type.loan_type_name FROM loan INNER JOIN loan_type ON loan.loan_type_id = loan_type.loan_type_id WHERE loan.employee_id = ? AND loan.paid = 0 AND loan.date_cancelled IS NULL AND loan.terms_to_pay > loan.current_term ', [user_id], function (error, result, fields) {
      if(error){
        return reject(error)
      }
      return resolve(result)
    })
  })
}






module.exports = userModelAndConnection