import React, {useEffect, useState} from "react";
import useSocket from 'hooks/socket'
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";

const MessagesPage = () => {
    const [response, setResponse] = useState("");
    const {subscribe, unsubscribe, socket} = useSocket();

    useEffect(() => {
        subscribe('FromAPI', (data: any) => {
            setResponse(data);
        });
    }, [])

    const click = () => {
        socket.emit('asdasd', 'qwe')
    }

    return (
        <div>
            <Dialogs/>
            <Chat/>
        </div>
    )
}

export default MessagesPage
