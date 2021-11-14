import React from 'react'

function Validation(values) {

    let errors={};
    if(!values.fullname){
        errors.fullname="Please enter Name."
    }

    if(!values.email){
        errors.email="Please enter Email."
    } else if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.password){
        errors.password="Please enter password."
    } else if (values.password.length < 5){
        errors.password="Password must be more then 5 characters."
    }
    return errors;
};

export default Validation;
