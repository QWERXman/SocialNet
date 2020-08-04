import Axios from "axios";
import { DEFAULT_API_URL } from './constants'

class Service {
    async get(url: string, params?: any) {
        return await Axios.get(DEFAULT_API_URL + url, {params}).then(Res => Res.data)
    }

    async post(url: string, params?: any) {
        return await Axios.post(DEFAULT_API_URL + url, params)
    }
}

export default new Service();
