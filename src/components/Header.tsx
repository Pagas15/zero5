import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import logoMobile from '../assets/img/logoMobile.png';
import Navbars from './elements/Navbars';

function Header() {
  const [scroll, setScroll] = useState(false);
  const [activeMobi, setActiveMobi] = useState(false);

  const itemsNavBar = [
    {name: "About Us", key : "about"},
    {name: "Why Us", key : "key2"},
    {name: "Solution", key : "key3"},
    {name: "Contact", key : "key4"},
  ]
  const login = () => {

  };
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  const toggleMobiMenu = () => {
    setActiveMobi(!activeMobi)
  }
  
	return (
    <header className={"header" + (scroll ? ' header--top' : '') + (activeMobi ? ' active' : '')}>
      <div className="header__bg" onClick={toggleMobiMenu}></div>
      <div className="header__top" onClick={toggleMobiMenu}>
        <Link to="/" className="logo">
          <img src={logoMobile} alt="ZERO5" />
        </Link>
        <button className="header__btn" onClick={toggleMobiMenu}>
          <span />
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="wrapper">
        <Link to="/" className="logo mobileNone">
          <img src={logo} alt="ZERO5" />
        </Link>
        <Navbars itemsNavBar={itemsNavBar} login={login} onClick={toggleMobiMenu} />
      </div>
    </header>
	)
}

export default Header