import React from 'react';

class CustomCheckbox extends React.Component {


    render(){
        return (
            <>
            <input type="checkbox" 
            onClick={this.props.clicked}
            />
            <label>{this.props.label}</label>
            </>
        )
    }
}

export default CustomCheckbox;