import { createContext } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { authenticationReducer } from './../reducers/authenticationReducer';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const initialState = {
        token: '',
        userName: ''
    };

    const [state, userDispatch] = useReducer(authenticationReducer, initialState);

    const signUpUser = async (data, fromPathNavigate) => {
        try {
            const response = await axios.post(`/api/auth/signup`, JSON.stringify(data));
            if (response.status == 201) {
                localStorage?.setItem(
                    'session',
                    JSON.stringify({
                        username: response.data.createdUser.email,
                        token: response.data.encodedToken
                    })
                );
                userDispatch({
                    type: 'LOGIN_USER',
                    payload: { token: response.data.encodedToken, userName: response.data.createdUser.email }
                });
                axios.defaults.headers.common['Authorization'] = response.data.encodedToken;
                navigation(fromPathNavigate);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const loginUser = async (data, from, setSigninError, fromPathNavigate) => {
        try {
            const response = await axios.post(`/api/auth/login`, (data));
            if (response.status == 200) {
                localStorage?.setItem(
                    'session',
                    JSON.stringify({
                        username: response.data.foundUser.email,
                        token: response.data.encodedToken
                    })
                );
                userDispatch({
                    type: 'LOGIN_USER',
                    payload: { token: response.data.encodedToken, userName: response.data.foundUser.email },
                });
                axios.defaults.headers.common['Authorization'] = response.data.encodedToken;
                navigation(fromPathNavigate);
            }

        } catch (err) {
            setSigninError("incorrect credentials");
            console.log(err);
        }
    }

    return (
        <UserContext.Provider value={{ loginUser, signUpUser, state, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};
export const useUserContext = () => useContext(UserContext);