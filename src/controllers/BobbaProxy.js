export const tryLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const okResponse = {
                username,
                motto: 'it actually works!',
                look: 'ca-1811-62.lg-3018-81.hr-836-45.ch-669-1193.hd-600-10',
                token: 'yoloswag1337xd'
            };

            //const failedResponse = {};

            if (username === 'fail') {
                reject({
                    message: 'La contraseña no es correcta'
                });
            }

            resolve(okResponse);
        }, 800);
    });
};

export const tryRegister = (username, email, password) => {
    return tryLogin(username, password);
};