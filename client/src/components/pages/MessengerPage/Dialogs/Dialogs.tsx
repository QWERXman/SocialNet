import React, {useCallback, useEffect, useState} from "react";
import {Button, Empty, List} from "antd";
import {Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import styles from './Dialog.module.scss'
import DialogItem from "./DialogItem";
import {useDispatch, useSelector} from "react-redux";
import cx from 'classnames'
import {IDialog} from "store/common/messages/state";
import {setActiveDialogAction, fetchDialogsAction} from "store/common/messages/actionCreators";
import {IRootState} from "store/store";

interface IDialogs {
    className: string,
    activeDialog?: IDialog,
}

const Dialogs = ({className, activeDialog}: IDialogs) => {
    const dialogs = useSelector((store:IRootState) => store.dialogs.dialogs)
    const allMessages = useSelector((store:IRootState) => store.dialogs.messages)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!dialogs || !dialogs.length) {
            dispatch(fetchDialogsAction())
        }
    }, []);

    const search = useCallback(() => {
        console.log(123)
    }, []);

    const selectDialog = useCallback((dialog: IDialog) => {
        const hasMassages = !!(allMessages && allMessages[dialog._id])
        dispatch(setActiveDialogAction({dialog, hasMassages}))
    }, [allMessages]);

    const Header = (
        <div className={styles.header}>
            <Input.Search
                onSearch={search}
                placeholder="Find dialog"
                enterButton />
            <Button
                className={styles.newDialog}
                type="primary"
                title="Start new dialog"
            >
                <PlusOutlined translate="true"/>
            </Button>
        </div>
    )

    return (
        <div className={className}>
            <List
                className={styles.DialogsList}
                size="large"
                header={Header}
                bordered
                dataSource={dialogs}

                renderItem={
                    item =>
                        <List.Item
                            className={cx(styles.ListItem, {
                                [styles.ActiveItem]: item._id === (activeDialog && activeDialog._id)
                            })}
                            onClick={() => selectDialog(item)}
                        >
                            <DialogItem
                                text={item.text}
                                receiver={item.receiver}
                                fromMe={item.lastMessageFromMe}/>
                        </List.Item>
                }
                locale={{emptyText: <Empty description={'No dialogs yet'} />}}
            />
        </div>
    )
}

export default Dialogs;
