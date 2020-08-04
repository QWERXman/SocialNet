import Service from './base'
// import { ProfileEntitieBL } from '../entities/Profile'

const Profile = {
    getSelf: () => Service.get('api/profile/self').then(res => {
        return res
    }),
    // setCurrent: (data: ProfileEntitieBL) => Service.post('profiles/current_user/', data).then(res => res.data)
}

export default Profile;
