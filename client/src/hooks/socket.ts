import socketIOClient from "socket.io-client";
import { DEFAULT_API_URL } from 'service/constants';

let socket: SocketIOClient.Socket;

const connect = () => {
    if (!socket) {
        socket = socketIOClient(DEFAULT_API_URL, {query: {token: window.localStorage.uathToken}});
    }

    return socket;
}

const useSocket = () => {
    const socket = connect();

    const subscribe = (eventKey: string, callback: Function) => {
        if (!eventKey || !callback) {
            return;
        }
        socket.on(eventKey, callback);
    }

    const unsubscribe = (eventKey: string, callback: Function) => {
        if (!eventKey || !callback) {
            return;
        }
        socket.removeListener(eventKey, callback);
    }

    return {subscribe, unsubscribe, socket}
}

export default useSocket;
