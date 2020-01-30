import React from 'react';
import './styles/aside.css'

const Aside = () => {
 return (        
<aside className="aside">
  <div className="aside__item">
    <a href="#">profile</a>
  </div>
  <div className="aside__item">
    <a href="#">friends</a>
  </div>
  <div className="aside__item">
    <a href="#">messages</a>
  </div>
  <div className="aside__item">
    <a href="#">music</a>
  </div>
</aside>
);
}

export default Aside;