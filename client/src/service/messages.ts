import Service from './base'

interface ISendMessage {
    text: string,
    profileId: string
}

export const MessagesService = {
    dialogsList: () => Service.get('api/messages/dialogsList/'),
    dialogMessages: (id: string | undefined) => Service.get('api/messages/dialogMessages/', {id}),
    sendMessage: ({text, profileId}: ISendMessage) => Service.post('api/messages/sendMessage/', {text, profileId}),
}
