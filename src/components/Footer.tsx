import React from 'react'

import image from '../assets/img/elements/footer.png';
import Navbars from './elements/Navbars';

function Footer() {
  const itemsNavBar = [
    {name: "About Us", key : "about"},
    {name: "Why Us", key : "key2"},
    {name: "Solution", key : "key3"},
    {name: "Contact", key : "key4"},
  ]


	return (<footer className="footer">
    <div className="footer__top wrapper">
      <div className="footer__left">
        <div className="footer__title txt28x34 cWhite">
          Say hello, <a href="./" className="cLightGreen">get more info</a> or schedule a demo
          </div>
        <div className="footer__image mobileNone">
          <img src={image} alt="" />
        </div>
        <a href="mailto:team@zero5.co" className="cWhite txt18x26 mobileNone">team@zero5.co</a>
      </div>
      <div className="footer__form">
        <form>
          <label className="inputBox">
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label className="inputBox">
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label className="inputBox">
            <input type="text" name="purpose" placeholder="Purpose" />
          </label>
          <div className="inputBox">
            <textarea name="message" rows={10} placeholder="Message" defaultValue={""} />
          </div>
          <button className="btnWhite">
            Sent
          </button>
        </form>
      </div>
    </div>
    <div className="footer__bottom wrapper">
      <ul className="linksTxt">
        <li className="linksTxt__item"><a href="./" className="linksTxt__link btnWhite">in</a></li>
        <li className="linksTxt__item"><a href="./" className="linksTxt__link btnWhite">al</a></li>
      </ul>
      <Navbars itemsNavBar={itemsNavBar} classList="navBar--white mobileNone"/>
      <ul className="miniLinks">
        <li className="miniLinks__item"><a href="./" className="miniLinks__link">Privacy statement</a></li>
        <li className="miniLinks__item"><a href="./" className="miniLinks__link">Terms of use</a></li>
        <li className="miniLinks__item"><a href="./" className="miniLinks__link">Copyright 2022. zero5, Inc</a></li>
        <li className="miniLinks__item"><a href="./" className="miniLinks__link">All Rights Reserved</a></li>
      </ul>
    </div>
  </footer>)
}

export default Footer