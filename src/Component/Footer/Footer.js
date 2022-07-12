import Icon from '../Global/Icon/Icon';
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
            <div className='left-icons'>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>
            <Icon image={'./images/general/footer-part/atvi-shanghai-logo.png'}/>   
            </div>
            <div className='right-icons'>
            <img src="./images/general/footer-part/esrb-privacy.jpg" alt="logo" className='img-icon2' /> 
            <img src="./images/general/footer-part/cod-hub-esrb-en.png" alt="logo" className='img-icon1' /> 
            </div>
        </div>
        <div className='footer-detail'>
            <span>© 2022 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY LEAGUE, CALL OF DUTY MODERN WARFARE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY WARZONE, WARZONE and CALL OF DUTY VANGUARD are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the property of their respective owners.</span>
        </div>
    </div>
    </>
  )
}
