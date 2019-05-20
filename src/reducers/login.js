const defaultState = {
    loggedIn: false,
    username: '',
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                loggedIn: true,
                username: action.username,
            };
        case "LOG_OUT":
            return {
                loggedIn: false,
                username: '',
            };
        default:
            return state;

    }
};

export default login;