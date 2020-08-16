import Service from './base'

interface IAddFriend {
    profileId: string
}

export const FriendsService = {
    allUsers: () => Service.get('api/friends/all_users/'),
    outgoingRequests: () => Service.get('api/friends/outgoing_requests'),
    incomingRequests: () => Service.get('api/friends/incoming_requests'),

    addFriend: (data: IAddFriend) => Service.post('api/friends/add_friend', data),
}
