import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className="container-footer">
        <div className='footer-nav'>
            <ul>
                <li><a href="#">Legal</a></li>
                |
                <li><a href="#">Term of use</a></li>
                |
                <li><a href="#">Privacy policy</a></li>
                |
                <li><a href="#">cookie policy</a></li>
                |
                <li><a href="#">support</a></li>
            </ul>
        </div>
        <div className='footer-icons'>

        </div>
        <div className='footer-detail'>
            <span>© 2022 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY LEAGUE, CALL OF DUTY MODERN WARFARE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY WARZONE, WARZONE and CALL OF DUTY VANGUARD are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the property of their respective owners.</span>
        </div>
    </div>
    </>
  )
}
