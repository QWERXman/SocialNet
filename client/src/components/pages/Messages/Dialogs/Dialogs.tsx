import React, {useCallback, useEffect, useState} from "react";
import {Button, Empty, List} from "antd";
import {Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import styles from './Dialog.module.scss'
import DialogItem from "./DialogItem";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "store/store";
import {getDialogs, setActiveDialog} from "store/actions/pages/Messages/messages";
import {IDialogEntity} from "../../../../entities/Messages";


interface IDialogs {
    className: string
}

const Dialogs = ({className}: IDialogs) => {
    const dialogs = useSelector((store:IStore) => store.messages.dialogs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDialogs())
    }, []);

    const search = useCallback(() => {
        console.log(123)
    }, []);

    const selectDialog = useCallback((dialog:IDialogEntity) => {
        dispatch(setActiveDialog(dialog))
    }, []);

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
                        <List.Item className={styles.ListItem} onClick={() => selectDialog(item)}>
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
