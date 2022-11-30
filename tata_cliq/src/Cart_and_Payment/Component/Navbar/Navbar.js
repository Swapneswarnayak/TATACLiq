import React from 'react'

import "../Allcss.css/all.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div id='logo'><img src="/Tata_Assets/logo.png" alt='Logo' /></div>
        <div id='users'>
            <img src='/Tata_Assets/User.png' alt='profile' />
         
        </div>
    </div>
  )
}

export default Navbar