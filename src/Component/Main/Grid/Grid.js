import GridItem from '../../Global/GridItem/GridItem';
import Button from './../../Global/Button/Button';
import './Grid.css';

export default function Grid() {
  return (
    <>
        <div className="container-grid-part">
            <div className='one'>
              <img src=".\images\main page\grid-pics-part\CDLChampionship_2022_LOGO.png" alt="cld icon" />
              <span>GET YOUR TICKETS TO CHAMPIONSHIP WEEKEND IN LOS ANGELES | AUG 4-7</span>
              <Button text={"Lean More"} />
            </div>
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
    </>
  )
}
