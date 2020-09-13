import React from "react";

interface IChat {
    className: string
}


const Chat = ({className}: IChat) => {
    return (
        <div className={className}>chat</div>
    )
}

export default Chat;
