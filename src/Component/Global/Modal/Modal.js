import './Modal.css';

export default function Modal() {
  return (
    <>
    <div className="modal-tainer">
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
                <label>Email Address</label>
                <input type="email" className='userName-login' />
                <label>Password</label>
                <input type="password"className='password-login' />
                <button className='submit-btn'>Sign in</button>
            </form>
        </div>
    </div>
    </>
  )
}
