import Axios from "axios";
import { DEFAULT_API_URL } from './constants'
import {logout} from "./auth";

class Service {
    async get(url: string, params?: any) {
        try {
            return await Axios.get(DEFAULT_API_URL + url, {params}).then(Res => Res.data)
        } catch (e) {
            if (e.response.status === 401) {
                logout();
            }
        }
    }

    async post(url: string, params?: any) {
        try {
            return await Axios.post(DEFAULT_API_URL + url, params)
        } catch (e) {
            if (e.response.status === 401) {
                logout();
            }
        }
    }
}

export default new Service();
