export const tryLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const okResponse = {
                username,
                motto: 'yolo',
                look: 'hd-190-10.lg-3023-1408.ch-215-91.hr-893-45',
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