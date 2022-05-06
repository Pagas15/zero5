import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
  
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  
	return (
    <header className={"header" + (scroll ? ' header--top' : '')}>
      <div className="header__top">
        <Link to="/" className="logo">
          <img src={logoMobile} alt="ZERO5" />
        </Link>
        <div className="header__btn">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="wrapper">
        <Link to="/" className="logo mobileNone">
          <img src={logo} alt="ZERO5" />
        </Link>
        <Navbars itemsNavBar={itemsNavBar} login={login}/>
      </div>
    </header>
	)
}

export default Header