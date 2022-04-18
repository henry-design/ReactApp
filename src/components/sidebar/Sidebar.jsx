import React from 'react'
import './sidebar.css'
import Logo from '../../imgs/logo.png';
const Sidebar = () => {
  return (
   <div className="Sidebar">
       {/* logo */}
       <div className="logo">
           <img src={Logo}></img>
           <span>Sh<span>o</span>ps</span>
       </div>
  {/* ----------menu ---------- */}
       <div className="menu">
    <div className="menuItem">
      <div className="icon">Icon</div>
      <span>Dashboard</span>
    </div>
    </div>
   </div>
 
  )
}

export default Sidebar