import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const CreateUser = async ({ data, fromPathNavigate }) => {
    // const navigation = useNavigate();
    try {

        const response = await axios.post(`/api/auth/signup`, JSON.stringify(data));
        if (response.status == 201) {
            localStorage.setItem(
                'session',
                JSON.stringify({
                    username: response.data.createdUser.email,
                    token: response.data.encodedToken
                })
            );
            //navigation(fromPathNavigate);
            console.log(" Sign up status" + response.status);
        }
    } catch (err) {
        console.log(err);
    }
}

/** 
export async function loginUser(data) {
    try {
        const response = await axios.post(`/api/auth/login`, JSON.stringify(data));
        if (response.status == 200) {
            localStorage.setItem(
                'session',
                JSON.stringify({
                    username: response.data.createdUser.email,
                    token: response.data.encodedToken
                })
            );
        }
    } catch (err) {
        console.log(err);
    }

}*/