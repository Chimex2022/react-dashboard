import React from 'react'
import Logo from '../assests/logo.png'
import './Sidebar.css'


const Sidebar = () => {
    return (
      <div className="Sidebar">
      <div className='logo'>
        <img src={Logo} alt="" />
            </div>
            {/* {menu} */}
            <div className="menu">
                <div className="menu__item">
                    <UilEstate />
                    <span>Land & building</span>
                </div>
            </div>
     </div>
  )
}

export default Sidebar
