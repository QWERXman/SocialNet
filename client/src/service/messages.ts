import Service from './base'
import {IDialogEntity} from "entities/Messages";

export const MessagesService = {
    dialogsList: () => Service.get('api/messages/dialogsList/').then(res =>  res.data),
}
