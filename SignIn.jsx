import { Link } from 'react-router-dom';
import { useState } from "react";
import { InputText, InputPassword } from './../../../components/FormFields/InputField';

export const SignIn = () => {
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });
    return (
        <div className='auth-container'>
            <h2 className="form-heading">Login to my user account</h2>
            <form id="submit-form" class="form-container">
                <InputText
                    value={inputValues.email}
                    onChange={(e) =>
                        setInputValues({ ...inputValues, email: e.target.value })
                    }
                    label={"Email"}
                />

                <div className="alert">
                    <div>
                        Please enter username
                    </div>
                </div>
                <InputPassword
                    value={inputValues.password}
                    onChange={(e) =>
                        setInputValues({ ...inputValues, password: e.target.value })
                    }
                    label={"Password"}
                />
                <div className="alert">
                    <div>
                        Please enter password
                    </div>
                </div>
                <div className="authenticate">
                    <button type="button" className="Login btn  btn-block btn-lg rounded-0">Login</button>
                </div>
            </form>
            <div className="signInLinks">
                <p><small>Still don't have an account?</small> <Link to="/SignUp" class="Link">SignUp</Link></p>
            </div>
        </div>
    )
};