export const logIn = username => ({
    type: 'LOG_IN',
    loggedIn: true,
    username
});

export const logOut = () => ({
    type: 'LOG_OUT',
    loggedIn: false,
}); 