import React from 'react'
import './MainPage.css'
import Logo from '../assests/Rectangle 6.png'
import Logo2 from '../assests/Rectangle 4.png'
import Logo3 from '../assests/Rectangle 5.png'
import Logo4 from '../assests/Rectangle 2.png'


const MainPage = () => {
  return (
    <div className='main-image'>
      <img src={Logo} alt=""  />
      <img src={Logo2} alt=""  />
      <img src={Logo3} alt=""  />
      <img src={Logo4} alt=""  />
    </div>
  )
}

export default MainPage