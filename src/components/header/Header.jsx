// packages
import React from 'react';
import { useNavigate } from 'react-router-dom';

// styling
import './Header.scss'

// icons
import { VscHistory } from 'react-icons/vsc';
import { TiShoppingCart } from 'react-icons/ti';

export const Header = () => {

    const navigate = useNavigate();
  return (
    <div className='Header'>
        <div className='Header__logo' onClick={()=> navigate('/')}>Logo</div>
        <div className='Header__navItem Header__flexGrow'><VscHistory /></div>
        <div className='Header__navItem' onClick={() => navigate('/shoppingCart')}><TiShoppingCart /></div>
        {/* <button className='Header__navItem Header__flexGrow'><VscHistory /></button>
        <button className='Header__navItem'><TiShoppingCart /></button> */}
        
    </div>
  )
}
