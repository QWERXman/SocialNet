import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import {Button, Input} from "antd";
import cx from 'classnames';
import styles from './Chat.module.scss'
import {SendOutlined} from "@ant-design/icons";
import useSocket from "hooks/socket";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from 'store/store';
import {IDialogEntity, IMessage} from "../../../../entities/Messages";
import {newMessage} from "../../../../store/actions/pages/Messages/messages";
import Avatar from "../../../Avatar/Avatar";

interface IChat {
    className: string,
    activeDialog: IDialogEntity
}


const Chat = ({className, activeDialog}: IChat) => {
    const elementForScrollRef: any = useRef();
    const messages = useSelector((store:IStore) => store.messages.messages);
    const myProfile = useSelector((store:IStore) => store.profile);
    const receiverProfile = activeDialog.receiver;

    const profiles = {
        [myProfile._id]: myProfile,
        [receiverProfile._id]: receiverProfile,
    }

    const dispatch = useDispatch();

    const [text, setText] = useState<string>('');
    const {subscribe, socket} = useSocket();

    const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, [])

    const sendMessage = useCallback(() => {
        socket.emit('SendMessage', {text, to: activeDialog.receiver._id});
        setText('');
    }, [text, activeDialog])

    useEffect(() => {
        subscribe('NewMessage', (message:IMessage) => {
            dispatch(newMessage(message));
        });
    }, []);

    useEffect(() => {
        elementForScrollRef.current.scrollIntoView(false)
    }, [messages]);

    return (
        <div className={cx(className, styles.Chat)}>

            <div className={styles.Header}>
                <div className={styles.HeaderName}>{receiverProfile.name + ' ' + receiverProfile.secondName}</div>
                <Avatar config={receiverProfile.avatar} configurable={false} className={styles.Avatar}/>
            </div>

            <div className={styles.MessagesList}>
                {messages && messages.map((item, index) => {
                    const matchesPreviousSender = index > 0 && messages[index - 1].sender === item.sender;
                    return (
                        <div key={item._id} className={cx(styles.Message, {
                            [styles.MatchesPreviousSender]: !matchesPreviousSender
                        })}>
                            <div className={styles.MessageOverlay}>
                                <div className={styles.Avatar}>
                                    {!matchesPreviousSender &&
                                        <Avatar config={profiles[item.sender].avatar} configurable={false}/>
                                    }
                                </div>
                                <div className={styles.MessageData}>
                                    {!matchesPreviousSender &&
                                        <div className={styles.Name}>{profiles[item.sender].name + ' ' + profiles[item.sender].secondName}</div>
                                    }
                                    <div className={styles.Text}>{item.text}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div ref={elementForScrollRef}></div>
            </div>

            <div className={styles.WriteMessage}>
                <Input className={styles.Input} placeholder="Write a message..." allowClear value={text} onChange={onChangeText}/>
                <Button className={styles.SendButton} onClick={sendMessage}>
                    <SendOutlined translate="true"/>
                </Button>
            </div>
        </div>
    )
}

export default Chat;
