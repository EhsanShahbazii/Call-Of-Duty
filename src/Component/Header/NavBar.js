import './NavBar.css';
import Modal from '../Global/Modal/Modal';
import React from 'react';

export default class NavBar extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            signIn: false
        }

        this.signInHandler = this.signInHandler.bind(this)
    }

    signInHandler () {
        this.setState({
            signIn: !this.state.signIn
        })
    }

    render () {
        return (
            <>
            {this.state.signIn ? <Modal active={"active"} /> : <Modal />}
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
                        <a href="#" onClick={this.signInHandler}>Sign in</a>
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
                    <img src="./images/general/header-nav/icons8-menu-48.png" alt="hamburger menu" className='ham-menu' />
                </div>
            </div>
            </>
        )
    }
}
