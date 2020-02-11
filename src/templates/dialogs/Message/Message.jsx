import React from 'react';
import c from './Message.module.css'


const Message = props => <div className={`${c.message} ${c[props.inOut]}`}><p className={c.messageText}>{props.message}</p></div>

export default Message;