import Axios from 'axios'
import {DEFAULT_API_URL} from "./constants";

export function registration(username: string, password: string) {
    return Axios.post(DEFAULT_API_URL + 'api/auth/register', {
        username: username,
        password: password
    })
}

export function login(username: string, password: string) {
    return Axios.post(DEFAULT_API_URL + 'api/auth/login', {
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
    Axios.post(DEFAULT_API_URL + 'api/auth/login', {
        username: username,
        password: password
    }).then(response => {
        callback({
            authenticated: true,
            token: response.data.token
        })
    })
}
