import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  font-family: "Roboto", sans-serif;
  background: #f2f2f2;
  width: 100%;
  margin: 5px 0px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  display: block;
  border-color: ${props => props.valid ? 'green' : 'red'}
`;

const StyledLabel = styled.label`
font-size: 14px
font-family: "Raleway", sans-serif;
text-align: left;

`;

const Input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <StyledInput {...props.elementConfig} valid={props.valid} value={props.value} onChange={props.changed} disabled={props.disabled}/>;
            break;
        case ('checkbox'):
            inputElement = (
                <checkbox {...props.elementConfig} valid={props.valid} value={props.value} onChange={props.changed} disabled={props.disabled}>
                    
                </checkbox>
                );
            break;
        case ('select'):
                inputElement = (
                    <select
                        value={props.value} onChange={props.changed}>
                            {props.elementConfig.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.displayValue}
                                    </option>
                            ))}
                    </select>
                    );
                break;
        case ('date'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }

    return ( 
        <>
            <StyledLabel >{props.label}</StyledLabel>
            {inputElement}
        </>
    
    );
}
   


export default Input