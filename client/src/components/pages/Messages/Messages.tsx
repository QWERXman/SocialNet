import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import styles from './Messages.module.scss';
import {useSelector} from "react-redux";
import {IStore} from "store/store";

const MessagesPage = () => {
    const activeDialog = useSelector((store: IStore) => store.messages.activeDialog)

    return (
        <div className={styles.messages}>
            <Dialogs className={styles.dialogs} activeDialog={activeDialog}/>
            {activeDialog && <Chat className={styles.chat} activeDialog={activeDialog}/>}
        </div>
    )
}

export default MessagesPage
