import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './DialogItem.module.css'

const DialogItem = (props) => {
  let path ="/dialogs/" + props.id;
  let img = props.img;
  return(
    <div className={c.dialogItem}>
      <NavLink activeClassName={c.activeItem} className={c.dialogNavLink} to={path}>
        <div className={c.dialogImg}>
          <img className={c.dialogImgContent} src={img} alt=""/>
        </div>
        <div className={c.dialogTitle}>
          {props.name}
        </div>
      </NavLink>
    </div>
  )
}

export default DialogItem;