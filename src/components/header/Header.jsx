// packages
import React from 'react'

// styling
import './Header.scss'

// icons
import { VscHistory } from 'react-icons/vsc';
import { TiShoppingCart } from 'react-icons/ti';

export const Header = () => {
  return (
    <div className='Header'>
        <div className='Header__logo'>Logo</div>
        <div className='Header__navItem Header__flexGrow'><VscHistory /></div>
        <div className='Header__navItem'><TiShoppingCart /></div>
    </div>
  )
}
