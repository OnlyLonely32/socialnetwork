import React from 'react';
import c from './dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  let dItem = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} />);
  let mItem = props.messages.map( m => <Message message={m.message} />);
 return (        
  <div className={c.dialogs}>
    <div className={c.dialogItems}>
      { dItem }
    </div>
    <div className={c.messageItems}>
      { mItem } 
    </div>
  </div>
);
}

export default Dialogs;