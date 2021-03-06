export const authenticationReducer = (state, { type, payload }) => {
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

export const formsReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_FIRSTNAME": return {
            ...state,
            firstName: payload
        }
        case "SET_LASTNAME": return {
            ...state,
            lastName: payload
        }
        case "SET_EMAIL": return {
            ...state,
            email: payload
        }
        case "SET_PASSWORD": return {
            ...state,
            password: payload
        }
        default:
            break;
    }
}

export const errorReducer = (state, { payload, type }) => {
    switch (type) {
        case "ERROR_FIRSTNAME": return {
            ...state,
            firstName: payload
        }
        case "ERROR_LASTNAME": return {
            ...state,
            lastName: payload
        }
        case "ERROR_EMAIL": return {
            ...state,
            email: payload
        }
        case "ERROR_PASSWORD": return {
            ...state,
            password: payload
        }
        default:
            break;
    }

}
