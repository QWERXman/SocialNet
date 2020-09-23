import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {Button, Input} from "antd";
import cx from 'classnames';
import styles from './Chat.module.scss'
import {SendOutlined, UpCircleOutlined} from "@ant-design/icons";
import useSocket from "hooks/socket";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from 'store/store';
import {IDialogEntity, IMessage} from "entities/Messages";
import {newMessage} from "store/actions/pages/Messages/messages";
import Avatar from "components/Avatar/Avatar";
import ProfileCard from "components/Profile/ProfileCard/ProfileCard";

interface IChat {
    className: string,
    activeDialog: IDialogEntity
}


const Chat = ({className, activeDialog}: IChat) => {
    const allMessages = useSelector((store:IStore) => store.messages.messages);
    const myProfile = useSelector((store:IStore) => store.profile);
    const receiverProfile = activeDialog.receiver;
    const messages = allMessages && allMessages[activeDialog._id];

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

    return (
        <div className={cx(className, styles.Chat)}>

            <div className={styles.Header}>
                <div className={styles.HeaderName}>{receiverProfile.name + ' ' + receiverProfile.secondName}</div>
                <ProfileCard
                    className={styles.Avatar}
                    avatar={receiverProfile.avatar}
                    profile={receiverProfile}
                    configurable={false}/>
            </div>

            <div className={styles.MessagesList}>
                {messages && messages.map((item, index) => {
                    const matchesPreviousSender = index < messages.length - 1 && messages[index + 1].sender === item.sender;
                    return (
                        <div key={item._id} className={cx(styles.Message, {
                            [styles.MatchesPreviousSender]: !matchesPreviousSender
                        })}>
                            <div className={styles.MessageOverlay}>
                                <div className={styles.Avatar}>
                                    {!matchesPreviousSender &&
                                        <Avatar
                                            config={profiles[item.sender].avatar}
                                            configurable={false}/>
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
            </div>

            <div className={styles.WriteMessage}>
                <Input className={styles.Input} placeholder="Write a message..." allowClear value={text} onChange={onChangeText}/>
                <Button className={styles.SendButton} onClick={sendMessage}>
                    <UpCircleOutlined translate="true"/>
                </Button>
            </div>
        </div>
    )
}

export default Chat;
