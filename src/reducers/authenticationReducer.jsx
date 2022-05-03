export const authenticationReducer = (state, { type, payload }) => {
    console.log('payload token ' + payload.token);
    switch (type) {
        case "LOGIN_USER": return {
            ...state,
            token: payload.token,
            userName: payload.userName
        }
        case "SIGNUP_USER": return {
            ...state, token: payload.token,
            userName: payload.userName
        }
        default: return state;
    }
}

export const formsReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM":
            const { name, value, hasError, error, isFormValid } = action.data
            console.log("Action Data " + JSON.stringify(action.data));
            return {
                ...state,
                // update the state of the particular field,
                // by retaining the state of other fields
                [name]: { ...state[name], value, hasError, error },
                isFormValid,
            }
        default:
            return state
    }
}


