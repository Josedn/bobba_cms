import NProgress from 'nprogress';

const API_URL = 'http://localhost:1232/';

export const tryFakeLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = {
                username,
                motto: 'it actually works!',
                look: 'ca-1811-62.lg-3018-81.hr-836-45.ch-669-1193.hd-600-10',
                token: 'yoloswag1337xd'
            };

            const failedResponse = { error: 'password' };

            if (username === 'fail') {
                NProgress.done();
                resolve(failedResponse);
            }
            NProgress.done();
            resolve(okResponse);
        }, 2000);
    });
};

export const tryLogin = (username, password) => {
    NProgress.start();
    return new Promise((resolve, reject) => {

        const body = JSON.stringify({
            username,
            password
        });

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            mode: 'cors',
            headers,
            body
        };

        fetch(API_URL + 'login', options)
            .then(response => response.json())
            .then(data => {
                NProgress.done();
                resolve(data);
            })
            .catch(err => {
                NProgress.done();
                reject(err);
            });
    });
};

export const tryRegister = (username, email, password) => {
    NProgress.start();
    return new Promise((resolve, reject) => {

        const body = JSON.stringify({
            username,
            password,
            email
        });

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            mode: 'cors',
            headers,
            body
        };

        fetch(API_URL + 'register', options)
            .then(response => response.json())
            .then(data => {
                NProgress.done();
                resolve(data);
            })
            .catch(err => {
                NProgress.done();
                reject(err);
            });
    });
};