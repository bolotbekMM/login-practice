import React, {useState} from 'react';
import SignupForm from './SignupForm';
import SignUpFormSuccess from './SignUpFormSuccess';

const Form = () => {

    const [formIsSubmited, setFormIsSubmited]= useState(false)
    const submitForm =() =>{
        setFormIsSubmited(true);
    }
    return (
        <div> 
            {!formIsSubmited ? <SignupForm submitForm={submitForm}/>: <SignUpFormSuccess/>}

        </div>
    )
}

export default Form;
