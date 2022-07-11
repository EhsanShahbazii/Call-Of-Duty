import GridItem from '../../Global/GridItem/GridItem';
import Button from './../../Global/Button/Button';
import './Grid.css';

export default function Grid() {
  return (
    <>
        <div className="container-grid-part">
            <div className='one'>
              <img src=".\images\main page\grid-pics-part\CDLChampionship_2022_LOGO.png" alt="cld icon" />
              <div className="text-box">
              <span>GET YOUR TICKETS TO<br /> CHAMPIONSHIP WEEKEND <br />IN LOS ANGELES | AUG 4-7</span>
              <Button text={"Lean More"} />
              </div>
            </div>
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
    </>
  )
}
