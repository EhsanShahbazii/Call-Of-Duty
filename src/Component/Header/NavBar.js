import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
        <div className="container">
            <div>
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
            <div>
                <div>
                    <a href="#">LOGIN</a>
                    |
                    <a href="#">SIGN UP</a>
                </div>
                <div>
                    <img src="./images/general/header-nav/shield_icon_no_drop.png" alt="shield icon" />
                    <span>MY CALL OF DUTY</span>
                </div>
                <div>
                    <span>PRE-ORDER-MWII</span>
                </div>
            </div>
        </div>
    </>
  )
}
