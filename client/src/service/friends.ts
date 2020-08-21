import Service from './base'

interface IAddFriend {
    profileId: string
}

export const FriendsService = {
    findList: () => Service.get('api/friends/all_users/'),
    myFriends: () => Service.get('api/friends/my_friends/'),
    outgoingRequests: () => Service.get('api/friends/outgoing_requests'),
    incomingRequests: () => Service.get('api/friends/incoming_requests'),

    addFriend: (data: IAddFriend) => Service.post('api/friends/add_friend', data),
}
