import React from "react";
import Avatar from "../../../Avatar/Avatar";

import styles from './Dialog.module.scss'
import {IProfileData} from "store2/common/profile/state";

interface IDialogItem {
    text: string,
    receiver: IProfileData,
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
