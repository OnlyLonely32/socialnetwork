import React from 'react';
import c from './dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path ="/dialogs/" + props.id;
  return(
    <div className={c.dialog}>
<NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return(
  <div className={c.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
 return (        
  <div className={c.dialogs}>
    <div className={c.dialogItems}>
      <DialogItem id="1" name="Каролина" />
      <DialogItem id="2" name="Ольгерд" />
      <DialogItem id="3" name="Евгений" />
      <DialogItem id="4" name="Гелатьт" />
    </div>
    <div className={c.messageItems}>
      <Message message="Привет!"/>
      <Message message="привет!"/>
      <Message message="как ты?"/>
      <Message message="Нормально:)"/>
    </div>
  </div>
);
}

export default Dialogs;