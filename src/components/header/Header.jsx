// packages
import React from 'react';
import { useNavigate } from 'react-router-dom';

// styling
import './Header.scss'
import logo from '../../assets/pngShop.png'

// icons
import { VscHistory } from 'react-icons/vsc';
import { TiShoppingCart } from 'react-icons/ti';

export const Header = () => {

    const navigate = useNavigate();
  return (
    <div className='Header'>
        <img className='Header__logo' src={logo} onClick={()=> navigate('/')}/>
        <div className='Header__logoText' onClick={()=> navigate('/')}>Dumi Shop</div>
        <div className='Header__navItem' onClick={() => navigate('/ordersList')}><VscHistory /></div>
        <div className='Header__navIte Header__flexGrow'></div>
        <div className='Header__navItem' onClick={() => navigate('/shoppingCart')}><TiShoppingCart /></div>
        {/* <button className='Header__navItem Header__flexGrow'><VscHistory /></button>
        <button className='Header__navItem'><TiShoppingCart /></button> */}
        
    </div>
  )
}
