import React from 'react';
import logo from '../assets/img/logo.png';
import logoMobile from '../assets/img/logoMobile.png';
import Navbars from './elements/Navbars';

function Header() {
  const itemsNavBar = [
    {name: "About Us", key : "key1"},
    {name: "Why Us", key : "key2"},
    {name: "Solution", key : "key3"},
    {name: "Contact", key : "key4"},
  ]
  const login = () => {

  };
  
	return (
    <header className="header">
      <div className="header__top">
        <button className="logo">
          <img src={logoMobile} alt="ZERO5" />
        </button>
        <div className="header__btn">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="wrapper">
        <button className="logo mobileNone">
          <img src={logo} alt="ZERO5" />
        </button>
        <Navbars itemsNavBar={itemsNavBar} login={login}/>
      </div>
    </header>
	)
}

export default Header