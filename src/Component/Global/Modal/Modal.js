import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  emailHandler (event) {
    this.setState({
      email: event.target.value
    })
  }

  passwordHandler (event) {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    return (
      <>
      <div className={this.props.active + '1'}>
      <div className={["modal-tainer", this.props.active, this.props.signUp].join(' ')} >
          <div className='img-login'>
              <img src={this.props.image} alt="login images" />
          </div>
          <div className='login-forms'>
              <div className='cod-icon'>
              <span>Join the world of</span>
              <img src="./images/general/modal-part/cod-logo.png" alt="cod icon" />
              <span>{this.props.st === "signIn" ? "Sign in" : "Sign up"} TO YOUR ACCOUNT</span>
              </div>
              <form className='login-form'>
                  <div className="username-part">
                  <label>Email Address</label>
                  <input type="email" className='userName-login' maxLength={26} required onChange={(event) => this.emailHandler(event)} />
                  </div>
                  <div className="password-part">
                  <label>Password</label>
                  <input type="password"className='password-login' maxLength={26} minLength={8} required onChange={(event) => this.passwordHandler(event)} />
                  </div>
                  <span className='error-span'>
                    {this.state.password.length < 8 &&
                    "Password must be at least 8 characters"}
                  </span>
                  <button className='submit-btn'>
                    {this.props.st === "signIn" ? "Sign in" : "Sign up"}
                  </button>
                  <img src="./images/general/footer-part/digital-legends-logo.png" alt="icons" />
              </form>
          </div>
      </div>
      </div>
      </>
    )
  }
}

Modal.defaultProps = {
  image: './images/general/modal-part/call-of-duty-man-with-guns.jpg',
  st: 'signIn'
}