import React, {ChangeEvent, MutableRefObject, RefObject, useCallback, useEffect, useRef, useState} from "react";
import {Button, Input} from "antd";
import cx from 'classnames';
import styles from './Chat.module.scss'
import {SendOutlined, UpCircleOutlined} from "@ant-design/icons";
import useSocket from "hooks/socket";
import {useDispatch, useSelector} from "react-redux";
import {IDialogEntity, IMessage} from "entities/Messages";
import Avatar from "components/common/Avatar/Avatar";
import ProfileCard from "components/common/Profile/ProfileCard/ProfileCard";
import {IRootState} from "store/store";
import {IDialog} from "store/common/messages/state";
import {selectMyProfile} from "store/common/profile/selectors";
import {receiveNewMessageAction, sendMessageAction} from "store/common/messages/actionCreators";

interface IChat {
    className: string,
    activeDialog: IDialog
}


const Chat = ({className, activeDialog}: IChat) => {
    const dispatch = useDispatch();
    const elementForScrollRef = useRef<HTMLDivElement>(null);
    const allMessages = useSelector((store:IRootState) => store.dialogs.messages);
    const myProfile = useSelector(selectMyProfile);
    const receiverProfile = activeDialog.receiver;
    const messages = allMessages && allMessages[activeDialog._id];

    const [text, setText] = useState<string>('');
    const [hideMessagesList, setHideMessagesList] = useState<boolean>(true);
    const {subscribe, socket} = useSocket();

    const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, [])

    const sendMessage = useCallback(() => {
        dispatch(sendMessageAction({text, profileId: activeDialog.receiver._id}));
        setText('');
    }, [text, activeDialog])

    const onKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }, [text, activeDialog]);

    useEffect(() => {
        subscribe('NewMessage', (message:IMessage) => {
            dispatch(receiveNewMessageAction(message));
        });
    }, []);

    useEffect(() => {
        if (elementForScrollRef && elementForScrollRef.current) {
            elementForScrollRef.current.scrollIntoView(false);
            setHideMessagesList(false);
        }
    }, [messages]);

    if (!myProfile) {
        return null;
    }
    const profiles = {
        [myProfile._id]: myProfile,
        [receiverProfile._id]: receiverProfile,
    }

    return (
        <div className={cx(className, styles.Chat)}>

            <div className={styles.Header}>
                <div className={styles.HeaderName}>{receiverProfile.name + ' ' + receiverProfile.secondName}</div>
                <ProfileCard
                    className={styles.Avatar}
                    profile={receiverProfile}
                    configurable={false}/>
            </div>

            <div className={cx(styles.MessagesList, {
                    [styles.HideMessagesList]: hideMessagesList
                }
            )}>
                {messages && messages.map((item, index) => {
                    const startNextSender = index === 0 || messages[index - 1].sender !== item.sender;
                    return (
                        <div key={item._id} className={cx(styles.Message, {
                            [styles.MatchesPreviousSender]: startNextSender
                        })}>
                            <div className={styles.MessageOverlay}>
                                <div className={styles.Avatar}>
                                    {startNextSender &&
                                        <Avatar
                                            config={profiles[item.sender].avatar}
                                            configurable={false}/>
                                    }
                                </div>
                                <div className={styles.MessageData}>
                                    {startNextSender &&
                                        <div className={styles.Name}>{
                                            profiles[item.sender].name + ' ' + profiles[item.sender].secondName
                                        }</div>
                                    }
                                    <div className={styles.Text}>{item.text}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className={styles.ElementForScroll} ref={elementForScrollRef}></div>
            </div>

            <div className={styles.WriteMessage}>
                <Input
                    className={styles.Input}
                    placeholder="Write a message..."
                    allowClear
                    value={text}
                    onChange={onChangeText}
                    onKeyPress={onKeyPress}
                />
                <Button className={styles.SendButton} onClick={sendMessage}>
                    <UpCircleOutlined translate="true"/>
                </Button>
            </div>
        </div>
    )
}

export default Chat;
