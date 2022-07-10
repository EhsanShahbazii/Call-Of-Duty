import './Landing.css';
import Button from './../../Global/Button/Button';

export default function Landing() {
  return (
    <>
        <div className="container">
            <section>
                <div className='logo-image'>
                    <img src="./images/main page/landing-part/cod-mw2-logo.png" alt="mw2 logo" />
                </div>
                <div>
                    <h2>THE NEW ERA OF CALL OF DUTY DROPS OCTOBER 28TH</h2>
                </div>
                <div>
                    <Button text={'Watch Trailer'} />
                    <Button text={'Learn More'} />
                </div>
            </section>
        </div>
    </>
  )
}
