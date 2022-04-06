import { useState } from "react";
import { InputText, InputPassword } from './../../../components/FormFields/InputField';

export const SignUp = () => {
    const [inputValues, setInputValues] = useState({
        userName: "",
        email: "",
        password: "",
        cPassword: "",
        telephone: ""
    });
    return (
        <div className='auth-container'>
            <h2 className="form-heading">Create my Account</h2>
            <form id="submit-form" class="form-container">
                <InputText
                    value={inputValues.email}
                    onChange={(e) =>
                        setInputValues({ ...inputValues, email: e.target.value })
                    }
                    label={"Username"}
                />

                <InputText
                    value={inputValues.email}
                    onChange={(e) =>
                        setInputValues({ ...inputValues, email: e.target.value })
                    }
                    label={"Email"}
                />
                <InputPassword
                    value={inputValues.password}
                    onChange={(e) =>
                        setInputValues({ ...inputValues, password: e.target.value })
                    }
                    label={"Password"}
                />
                <InputPassword
                    value={inputValues.password}
                    onChange={(e) =>
                        setInputValues({ ...inputValues, password: e.target.value })
                    }
                    label={"Confirm Password"}
                />
                <button type="submit" className="button">Signup</button>
            </form>
        </div >
    )
};