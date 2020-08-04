import Axios from 'axios'
import Service from './base'

export function registration(username: string, password: string) {
    return Service.post('api/auth/register', {
        username: username,
        password: password
    })
}

export function login(username: string, password: string) {
    return Service.post('api/auth/login', {
        username: username,
        password: password
    })
}

export function login1(username: string, password: string) {
    getToken(username, password, (res: any) => {
        window.localStorage.uathToken = res.token;
        if (res.authenticated) {
            Axios.defaults.headers = {
                'Authorization': 'Token ' + res.token,
                'Content-Type': 'application/json'
            }
            window.location.reload()
        }
    })
}

export function logout() {
    delete window.localStorage.uathToken;
    delete Axios.defaults.headers.Authorization;
    window.location.reload();
}

export function isAuthenticated() {
    return !!Axios.defaults.headers.Authorization;
}

export function getToken(username: string, password: string, callback: Function) {
    Service.post('api/auth/login', {
        username: username,
        password: password
    }).then(response => {
        callback({
            authenticated: true,
            token: response.data.token
        })
    })
}
