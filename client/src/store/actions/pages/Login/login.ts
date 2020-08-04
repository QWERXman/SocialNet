import { IBaseActionType } from 'store/actions/base'
import { TRY_LOGIN, LOG_OUT } from './loginActionTypes'

export interface ITryLoginActionType extends IBaseActionType {
    username: string,
    password: string
}

export const tryLogin = (username: string, password: string): ITryLoginActionType => {
    return {
        type: TRY_LOGIN,
        username,
        password
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}
