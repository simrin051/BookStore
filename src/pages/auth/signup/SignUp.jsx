import { useState, useReducer, useEffect } from "react";
import { formsReducer } from "../../../reducers/authenticationReducer";
import { onInputChange } from "../AuthUtils";
import { InputText, InputPassword } from './../../../components/FormFields/InputField';
import { useLocation } from 'react-router-dom';
import { useUserContext } from "../../../contexts/user";
import { CreateUser } from './../../../services/auth';

const errorState = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

export const SignUp = () => {

    const state = useLocation();
    const fromPathNavigate = state.from ? state.from : '/';


    const initialState = {
        firstName: { value: "", hasError: false, error: "" },
        lastName: { value: "", hasError: false, error: "" },
        email: { value: "", hasError: true, error: "" },
        password: { value: "", hasError: true, error: "" },
        isFormValid: false,
    }
    const [formState, dispatch] = useReducer(formsReducer, initialState);

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    var disableSubmit = false;
    const { signUpUser } = useUserContext();
    const HandleSubmit = (e) => {
        e.preventDefault();
        const authPayload = {
            firstName: formState.firstName.value,
            lastName: formState.lastName.value,
            email: formState.email.value,
            password: formState.password.value
        }
        if (!checkForFormValidity()) {
            signUpUser(authPayload, fromPathNavigate);
        };

        const checkForFormValidity = () => {
            if (formState.email.error !== "" || formState.password.error !== "") {
                return true;
            } else {
                return false;
            }
        }

        return (
            <div>
                <div className='auth-container'>
                    <h2 className="form-heading">SIGN{" "}UP</h2>
                    <form id="submit-form" class="form-container">
                        <InputText
                            id={"FirstName"}
                            value={formState.firstName.value}
                            required
                            onChange={(e) => onInputChange("firstName", e.target.value, dispatch, formState)
                            }
                            label={"First Name"}
                        />
                        <InputText
                            id={"LastName"}
                            value={formState.lastName.value}
                            required
                            onChange={(e) => onInputChange("lastName", e.target.value, dispatch, formState)}
                            label={"Last Name"}
                        />
                        <InputText
                            id={"Email"}
                            value={formState.email.value}
                            required
                            onChange={(e) => {
                                onInputChange("email", e.target.value, dispatch, formState)
                            }}
                            label={"Email"}
                        />
                        {formState.email.hasError && (
                            <div className="error-message">{formState.email.error}</div>
                        )}
                        <InputPassword
                            id={"Password"}
                            value={formState.password.value}
                            required
                            onChange={(e) => {
                                onInputChange("password", e.target.value, dispatch, formState)
                            }}
                            label={"Password"}
                        />
                        {formState.password.hasError && (
                            <div className="error-message">{formState.password.error}</div>
                        )}
                        <button type="submit" id="signup-btn" className="button" onClick={HandleSubmit}>Signup</button>
                    </form>
                </div >
            </div>
        )
    }
}