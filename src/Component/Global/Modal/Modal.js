import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.emailHandler = this.emailHandler.bind(this);

  }

  emailHandler (event) {
    console.log(event.target.value);
  }

  passwordHandler () {

  }

  render () {
    return (
      <>
      <div className={["modal-tainer", "active"].join(' ')} >
          <div className='img-login'>
              <img src="./images/general/modal-part/call-of-duty-man-with-guns.jpg" alt="login images" />
          </div>
          <div className='login-forms'>
              <div className='cod-icon'>
              <span>Join the world of</span>
              <img src="./images/general/modal-part/cod-logo.png" alt="cod icon" />
              <span>SIGN IN TO YOUR ACCOUNT</span>
              </div>
              <form className='login-form'>
                  <div className="username-part">
                  <label>Email Address</label>
                  <input type="email" className='userName-login' onChange={(event) => this.emailHandler(event)} />
                  </div>
                  <div className="password-part">
                  <label>Password</label>
                  <input type="password"className='password-login' onChange={(event) => this.passwordHandler(event)} />
                  </div>
                  <span className='error-span'>please fill the email and passowrd</span>
                  <button className='submit-btn'>Sign in</button>
                  <img src="./images/general/footer-part/digital-legends-logo.png" alt="icons" />
              </form>
          </div>
      </div>
      </>
    )
  }
}