import NProgress from 'nprogress';

export const tryLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = {
                username,
                motto: 'it actually works!',
                look: 'ca-1811-62.lg-3018-81.hr-836-45.ch-669-1193.hd-600-10',
                token: 'yoloswag1337xd'
            };

            //const failedResponse = {};

            if (username === 'fail') {
                NProgress.done();
                reject({
                    message: 'La contraseña no es correcta'
                });
            }
            NProgress.done();
            resolve(okResponse);
        }, 2000);
    });
};

export const tryRegister = (username, email, password) => {
    return tryLogin(username, password);
};