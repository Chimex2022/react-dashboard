import React, { useState } from 'react'
import Logo from '../assests/logo.png'
import './Sidebar.css'
import { SidebarData } from './Data'
import {FaSignOutAlt} from 'react-icons/fa'


const Sidebar = () => {
  const [selected, setSelected] = useState(0)
    return (
      <div className="Sidebar">
      <div className='logo'>
        <img src={Logo} alt="" />
            </div>
            {/* {menu} */}
            <div className="menu">
                 {SidebarData.map((item, index) => {
                  return (
                    <div className={selected===index ? 'menu__item active': 'menu__item'}
                    key={index}
                    onClick={()=>setSelected(index)}>
                      <item.icon />
                      <span>
                      {item.heading}
                      </span>
      
                    </div>
                  )
                 })}
                 <div className="menu__item">
                  <FaSignOutAlt />
                 </div>
                </div>
            </div>
  )
}

export default Sidebar
