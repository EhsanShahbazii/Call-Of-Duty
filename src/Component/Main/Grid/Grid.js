import GridItem from '../../Global/GridItem/GridItem';
import Button from './../../Global/Button/Button';
import './Grid.css';

export default function Grid() {

  const dataList = [
    {image: './images/main page/grid-pics-part/6.15-hub-s4-keyart-tout-small.jpg', logo: './images/main page/logos-part/vg-logo-white-logo.png', text: 'enough is never enough. play season four now.'},
    {image: './images/main page/grid-pics-part/6.21-hub-s4-wz-sm-tout.jpg', logo: './images/main page/logos-part/wz-logo.png', text: 'go all-in and reap the rewards'},
    {image: './images/main page/grid-pics-part/6.21-hub-s4-bp-sm-tout.jpg', logo: './images/main page/logos-part/vg-logo-white-logo.png', text: 'get access to all 100 tiers of battle pass content'},
    {image: './images/main page/grid-pics-part/cq5dam.thumbnail.319.319(8).jpg', logo: './images/main page/logos-part/codm-white.png', text: 'pilot the new jackal in call of duty: mobile season 6-to the skies'}
  ]

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
            <GridItem {...dataList[0]} />
            <GridItem {...dataList[1]} />
            <GridItem {...dataList[2]} />
            <GridItem {...dataList[3]} />
        </div>
    </>
  )
}
