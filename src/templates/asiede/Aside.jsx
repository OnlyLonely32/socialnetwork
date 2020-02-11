import React from 'react';
import c from './aside.module.css'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Aside = (props) => {
let fItems = props.friends.map( f => <Friends name={f.name} img={f.img} />);
 return (        
<aside className={c.aside}>
  <div className={c.asideItem}>
    <NavLink to="/profile" activeClassName={c.activeLink}>profile</NavLink>
  </div>
  <div className={c.asideItem}>
    <NavLink to="/friends" activeClassName={c.activeLink}>friends</NavLink>
  </div>
  <div className={c.asideItem}>
    <NavLink to="/dialogs" activeClassName={c.activeLink}>messages</NavLink>
  </div>
  <div className={c.asideItem}>
    <NavLink to="/news" activeClassName={c.activeLink}>news</NavLink>
  </div>
  <div className={c.asideItem}>
    <NavLink to="/music" activeClassName={c.activeLink}>music</NavLink>
  </div>
  <div className={c.friends}>
    <h3 className={c.friendsTitle}>Friends</h3>
    {fItems}
  </div>
</aside>
);
}

export default Aside;