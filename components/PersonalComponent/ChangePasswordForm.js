import styled from "styled-components";
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import Input from '../UI/Input';
import Button from '../UI/Button'

const StyledTitle = styled.span`
font-size: 14px
font-family: "Raleway", sans-serif;
`;
const StyledDiv = styled.div`
  padding: 10px;
  float: left;
  margin: 20px 5px 0 5px;
  width: 50%;
  margin-bottom: 50px;
`;

class ChangePassword extends React.Component {
  state = {
    passwordForm: {
          current_password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Current Password'
                },
                value: '',
                validation: {
                  checkedPassword: true
                },
                valid: false
                
            },
            new_password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'New Password (min. 5 chars)'
                },
                value: '',
                validation: {
                  required: true,
                  minLength: 5
                },
                valid: false
                
                
            },
            confirm_new_password: {
              elementType: 'input',
              elementConfig: {
                  type: 'password',
                  placeholder: 'Confirm New Password (min. 5 chars)'
              },
              value: '',
              validation: {
                required: true,
                minLength: 5
              },
              valid: false
              
          },
           
    },
    isload: false,
    formValid: false,
    matchPassword: false
  };

  submitHandler = (event) => {
    event.preventDefault();
    const user_id = this.props.userProfile.user_id;
    const passwordData = {};
    for(let formElementIndentifier in this.state.passwordForm) {
      passwordData[formElementIndentifier] = this.state.passwordForm[formElementIndentifier].value;
    }
    const newPassword = passwordData.new_password;
    const data = {
      newPassword,
      user_id
    }
    this.props.onUpdatePass(newPassword, user_id);
    console.log(data);
    
  }

  checkValidity (value, rules ) {
    let isValid = true;

    if(!rules){
      return true;
    }
    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.checkedPassword) {
      isValid = value === this.props.userProfile.password && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
      const updatedPasswordForm = {
          ...this.state.passwordForm
      };
      const updatedFormElement = {
          ...updatedPasswordForm[inputIdentifier]
      };

      updatedFormElement.value = event.target.value;
      updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
      updatedPasswordForm[inputIdentifier] = updatedFormElement;
      let newPass = {};
      let confirmPass = {};
      for(let inputIdentifier in updatedPasswordForm){
        if(updatedPasswordForm[inputIdentifier] === updatedPasswordForm.new_password){
          newPass= updatedPasswordForm[inputIdentifier].value
        }
        if(updatedPasswordForm[inputIdentifier] === updatedPasswordForm.confirm_new_password){
          confirmPass= updatedPasswordForm[inputIdentifier].value
        }
      }
      let matchPassword = false;
      if(newPass === confirmPass){
        matchPassword = true;
      }
      let formValid= true;
      for(let inputIdentifier in updatedPasswordForm){
        formValid = updatedPasswordForm[inputIdentifier].valid && formValid
      }
      if(matchPassword !== true){
        formValid = false;
      }
      
      this.setState({
        passwordForm: updatedPasswordForm, formValid: formValid
      });
      
  }


  render() {
    const userProfile = ({} = this.props.userProfile || {});

    const formElementsArray = [];
        for(let key in this.state.passwordForm) {
            formElementsArray.push({
                id: key,
                config: this.state.passwordForm[key]
            });
        }
      
    let form = (
      <form onSubmit={this.submitHandler}>
          {formElementsArray.map(formElement => (
              <Input 
                  key={formElement.id}
                  elementType = {formElement.config.elementType}
                  elementConfig = {formElement.config.elementConfig}
                  value = {formElement.config.value}
                  changed={(event) => this.inputChangedHandler(event, formElement.id)}
                  valid={formElement.config.valid}
        
              />
          ))}
          <Button disabled={!this.state.formValid}>Update Password</Button>
      </form>

  )

    return (
      <StyledDiv>
        <h2>Change Password</h2>
          {form}
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.user.userProfile
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // onCheckPass: () => dispatch(action.checkPassword())
    onUpdatePass: (new_password, user_id) => dispatch(actions.updatePassword(new_password, user_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
