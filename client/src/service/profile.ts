import Service from './base'
import {IProfileEntity} from "entities/Profile";
import {IProfileAvatar} from "entities/ProfileAvatar";

const ProfileService = {
    getSelf: () => Service.get('api/profile/self'),
    setSelf: (data: IProfileEntity) => Service.post('api/profile/self', data).then(res => res && res.data),
    setAvatar: (data: IProfileAvatar) => Service.post('api/profile/self/editAvatar', data).then(res => res && res.data)
}

export default ProfileService;
