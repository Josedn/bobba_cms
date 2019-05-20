export const logIn = (username, motto, look, token) => ({
    type: 'LOG_IN',
    loggedIn: true,
    username,
    motto,
    look,
    token
});

export const logOut = () => ({
    type: 'LOG_OUT',
    loggedIn: false,
}); 