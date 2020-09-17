import React from "react";
import {IProfileEntity} from "entities/Profile";
import Avatar from "../../../Avatar/Avatar";

import styles from './Dialog.module.scss'

interface IDialogItem {
    text: string,
    receiver: IProfileEntity,
    fromMe: boolean
}

const DialogItem = ({text, receiver, fromMe}: IDialogItem) => {
    return (
        <div className={styles.DialogItem}>
            <Avatar config={receiver.avatar} configurable={false} className={styles.Avatar}/>
            <div className={styles.Receiver}>
                <div className={styles.Name}>{receiver.name + ' ' + receiver.secondName}</div>
                <div>
                    <span className={styles.FromMe}>{fromMe ? 'You: ' :''}</span>
                    <span className={styles.Text}>{text}</span>
                </div>
            </div>
        </div>
    )
}

export default DialogItem;
