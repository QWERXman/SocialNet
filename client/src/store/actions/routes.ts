import { IBaseActionType } from './base'

export const CHANGE_ROUTE = 'CHANGE_ROUTE'

export const changeRoute = (id: number): ChangeRouteActionType => {
    return {
        type: CHANGE_ROUTE,
        id
    }
}

export interface ChangeRouteActionType extends IBaseActionType  {
    id: number
}
