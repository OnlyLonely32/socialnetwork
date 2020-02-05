import React from 'react';
import c from './Message.module.css'


const Message = (props) => <div className={c.message}>{props.message}</div>

export default Message;