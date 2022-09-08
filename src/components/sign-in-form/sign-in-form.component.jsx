import { useState} from 'react';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
  } from '../../utils/firebase/firebase.utils';



import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email:'',
    password:'',

};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;




    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup(); 
        createUserDocumentFromAuth(user);
    }


    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => { 
        event.preventDefault(); 

       

        try{
            await signInAuthUserWithEmailAndPassword(email, password); 
   
            resetFields();
        }catch(error){
            if(error === "auth/wrong-password" || error === "auth/user-not-found"){
                alert("Incorrect email or password");
            }
            console.log("Error: ", error)
        }
    }


    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});
    };



    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign In</span>
            <form onSubmit={handleSubmit}>
          

                <FormInput
                    label="Email"
                    type='email' 
                    name="email" 
                    required 
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    label="Password"
                    type='password' 
                    name="password" 
                    required 
                    onChange={handleChange}
                    value={password}
                />
                
           

                <div className='buttons-container'>
                    <Button type='submit'>Log In</Button>
                    <Button type='button' buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}


export default SignInForm; 