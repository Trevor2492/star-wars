import React from 'react'
import logo from '../img/starWarsLogo.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' style={{ width: 300, textAlign: 'center' }}/>
    </div>
  )
}

export default Header
