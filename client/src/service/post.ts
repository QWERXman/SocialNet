import Service from './base'
import {IPost} from "store/common/news/state";

interface IListFilter {
    profileId?: string,
    pageSize?: number
}

export const PostService = {
    create: (data: IPost) => Service.post('api/post/create/', data).then(res => res && res.data),
    list: (filter: IListFilter) => Service.get('api/post/list/', filter)
}
