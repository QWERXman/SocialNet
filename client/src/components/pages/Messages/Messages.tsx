import React, {useEffect, useState} from "react";
import useSocket from 'hooks/socket'
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import styles from './Messages.module.scss';

const MessagesPage = () => {
    const [response, setResponse] = useState("");
    const {subscribe, unsubscribe, socket} = useSocket();

    useEffect(() => {
        subscribe('FromAPI', (data: any) => {
            setResponse(data);
        });
    }, []);

    const click = () => {
        socket.emit('asdasd', 'qwe')
    }

    return (
        <div className={styles.messages}>
            <Dialogs className={styles.dialogs}/>
            <Chat className={styles.chat}/>
        </div>
    )
}

export default MessagesPage
