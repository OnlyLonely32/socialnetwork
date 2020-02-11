import React from 'react';
import c from './dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  let dItem = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} img={d.img}/>);
  let mItem = props.messages.map( m => <Message message={m.message} inOut={m.inOut}/>);

  let text = React.createRef();
  let show = () => alert(text.current.value)
  
 return (        
  <div className={c.dialogs}>
    <div className={c.dialogItems}>
      { dItem }
    </div>
    <div className={c.messageItems}>
      { mItem } 
      <div className={c.sendMessage}>
        <textarea ref={text} className={c.sendMessageText} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={show} className={c.sendMessageBtn}>Send</button>
      </div>
    </div>
  </div>
);
}

export default Dialogs;