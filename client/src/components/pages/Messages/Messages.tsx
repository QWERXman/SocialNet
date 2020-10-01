import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import styles from './Messages.module.scss';
import {useSelector} from "react-redux";
import {IRootState} from "../../../store2/store";

const MessagesPage = () => {
    const activeDialog = useSelector((store: IRootState) => store.dialogs.activeDialog)

    return (
        <div className={styles.messages}>
            <Dialogs className={styles.dialogs} activeDialog={activeDialog}/>
            {activeDialog && <Chat className={styles.chat} activeDialog={activeDialog}/>}
        </div>
    )
}

export default MessagesPage
