import Icon from '../Global/Icon/Icon';
import './Footer.css';

export default function Footer() {

    const iconData = [
        {image: './images/general/footer-part/atvi-shanghai-logo.png'},
        {image: './images/general/footer-part/activision-logo.svg'},
        {image: './images/general/footer-part/beenox-logo.png'},
        {image: './images/general/footer-part/toys-for-bob-logo.svg'},
        {image: './images/general/footer-part/demonware-logo.png'},
        {image: './images/general/footer-part/digital-legends-logo.png'},
        {image: './images/general/footer-part/high-moon-logo.png'},
        {image: './images/general/footer-part/raven-logo.png'},
        {image: './images/general/footer-part/activision-logo.svg'},
        {image: './images/general/footer-part/solid-state-logo.png'},
        {image: './images/general/footer-part/infinity-ward-logo.svg'},
        {image: './images/general/footer-part/treyarch-logo.svg'}
    ]

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
            <Icon {...iconData[0]} />
            <Icon {...iconData[1]} />
            <Icon {...iconData[2]} />
            <Icon {...iconData[3]} />
            <Icon {...iconData[4]} />
            <Icon {...iconData[5]} />
            <Icon {...iconData[6]} />
            <Icon {...iconData[7]} />
            <Icon {...iconData[8]} />
            <Icon {...iconData[9]} />
            <Icon {...iconData[10]} />
            <Icon {...iconData[11]} />   
            </div>
            <div className='right-icons'>
            <img src="./images/general/footer-part/esrb-privacy.jpg" alt="logo" className='img-icon2' /> 
            <img src="./images/general/footer-part/cod-hub-esrb-en.png" alt="logo" className='img-icon1' /> 
            </div>
        </div>
        <div className='footer-detail'>
            <span>© 2022 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY LEAGUE, CALL OF DTY MODERN WARFARE, MODERN WARFARE, CALL OF DUTY BLACK OPS, CALL OF DUTY WARZONE, WARZONE and CLL OF DUTY VANGUARD are trademarks of Activision Publishing, Inc. All other trademarks and tade names are the property of their respective owners.</span>
        </div>
    </div>
    </>
  )
}
