import React, {useCallback, useEffect, useState} from "react";
import {Button, Empty, List} from "antd";
import {Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import styles from './Dialog.module.scss'
import {MessagesService} from "../../../../service/messages";
interface IDialogs {
    className: string
}

const Dialogs = ({className}: IDialogs) => {
    const [dialogs, setDialogs] = useState<String[]>([])

    useEffect(() => {
        MessagesService.dialogsList().then(dialogs => {
            setDialogs(dialogs)
        })
    }, []);

    const search = useCallback(() => {
        console.log(123)
    }, [])

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
                <PlusOutlined translate/>
            </Button>
        </div>
    )

    return (
        <div className={className}>
            <List
                size="large"
                header={Header}
                bordered
                dataSource={dialogs}
                renderItem={item => <List.Item>{item}</List.Item>}
                locale={{emptyText: <Empty description={'No dialogs yet'} />}}
            />
        </div>
    )
}

export default Dialogs;
