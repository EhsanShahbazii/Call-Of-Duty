import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
        <div className="container">
            <div className='left-box'>
                <div className='logo'>
                    <img src="./images/general/header-nav/cod-logo-white.svg" alt="call of duty logo"/>
                </div>
                <nav>
                    <ul className='nav-list'>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">ESPORTS</a></li>
                        <li><a href="#">SUPPORT</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>
            <div className='right-box'>
                <div className='log-part'>
                    <a href="#">LOGIN</a>
                    <b>|</b>
                    <a href="#">SIGN UP</a>
                </div>
                <div className='shield-part'>
                    <img src="./images/general/header-nav/shield_icon_no_drop.png" alt="shield icon" />
                    MY CALL OF DUTY
                </div>
                <div className='pre-part'>
                    PRE-ORDER-MWII
                </div>
            </div>
        </div>
    </>
  )
}
