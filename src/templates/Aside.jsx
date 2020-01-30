import React from 'react';
import c from './styles/aside.module.css'

const Aside = () => {
 return (        
<aside className={c.aside}>
  <div className={`${c.asideItem} ${c.asideItemActive}`}>
    <a href="#">profile</a>
  </div>
  <div className={c.asideItem}>
    <a href="#">friends</a>
  </div>
  <div className={c.asideItem}>
    <a href="#">messages</a>
  </div>
  <div className={c.asideItem}>
    <a href="#">music</a>
  </div>
</aside>
);
}

export default Aside;