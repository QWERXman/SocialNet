import Service from './base'
import {IPostEntity} from 'entities/Post'

interface IListFilter {
    profileId?: string,
    pageSize?: number
}

export const PostService = {
    create: (data: IPostEntity) => Service.post('api/post/create/', data).then(res =>  res.data),
    list: (filter: IListFilter) => Service.get('api/post/list/', filter)
}
