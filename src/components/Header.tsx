import React from 'react'
import Logo from './Logo'
import HamburgerMenu from './icons/HamburgerMenuIcon'


function Header() {
  return (
    <div className='flex start-0 justify-between align-bottom px-10 pt-4'>
      <Logo />
      <HamburgerMenu />
    </div>
  )
}

export default Header
