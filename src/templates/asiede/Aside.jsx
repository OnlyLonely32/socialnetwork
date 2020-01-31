import React from 'react';
import c from './aside.module.css'
import { NavLink } from 'react-router-dom';

const Aside = () => {
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
</aside>
);
}

export default Aside;