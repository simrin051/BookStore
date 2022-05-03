import { Link } from 'react-router-dom';
import { useState } from "react";
import { InputText, InputPassword } from './../../../components/FormFields/InputField';
import { useReducer } from "react";
import { formsReducer } from '../../../reducers/authenticationReducer';
import { onInputChange } from '../AuthUtils';
import { useUserContext } from '../../../contexts/user';
import { useLocation } from 'react-router-dom';


export const SignIn = () => {

    const initialState = {
        email: { value: "", hasError: true, error: "" },
        password: { value: "", hasError: true, error: "" },
        isFormValid: false,
    }
    const [formState, dispatch] = useReducer(formsReducer, initialState);
    const { loginUser, state: { token } } = useUserContext();
    console.log(" login user state " + token);
    const state = useLocation();
    const fromPathNavigate = state.from ? state.from : '/';
    const [error, setSigninError] = useState();


    const handleSubmit = async (e) => {
        console.log("inside handle submit");
        console.log(" formstate email value " + formState.email.value);
        console.log("formstate password value " + formState.password.value);
        if (formState.email.value == "" || formState.password.value == "") {
            console.log(" form email value == \"\"");
            if (formState.password.value === "") { formState.password.hasError = true; formState.password.error = "Please fill the password"; }
            if (formState.email.value === "") { formState.email.hasError = true; formState.email.error = "Please fill the email"; }
            e.preventDefault();
        } else {
            const authPayload = {
                email: formState.email.value,
                password: formState.password.value
            }
            e.preventDefault();
            loginUser(authPayload, fromPathNavigate, setSigninError, fromPathNavigate);
        }
    };

    return (
        <div>
            <div className='auth-container'>
                <h2 className="form-heading">LOGIN</h2>
                <form id="submit-form" class="form-container">
                    <InputText
                        value={formState.email.value}
                        onChange={(e) => {
                            onInputChange("email", e.target.value, dispatch, formState)
                        }}
                        label={"Email"}
                    />
                    {formState.email.hasError && (
                        <div className="error-message">{formState.email.error}</div>
                    )}
                    <InputPassword
                        value={formState.password.value}
                        onChange={(e) => {
                            onInputChange("password", e.target.value, dispatch, formState)
                        }}
                        label={"Password"}
                    />
                    {
                        formState.password.hasError && (
                            <div className="error-message">{formState.password.error}</div>
                        )
                    }
                    < div className="authenticate">
                        <button type="button" className="button" onClick={(e) => handleSubmit(e)} >Login</button>
                    </div>
                </form>
                <small class="incorrectcredentials">{error}</small>
                <div className="signUpLinks">
                    <p><small>Still don't have an account?</small> <Link to="/signup" class="Link">SignUp</Link></p>
                </div>
            </div >
        </div >
    )
}