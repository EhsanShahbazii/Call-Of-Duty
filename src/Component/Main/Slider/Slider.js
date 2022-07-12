import SliderItem from '../../Global/SliderItem/SliderItem';
import './Slider.css';

export default function Slider() {

  const sliderData = [
    {image: './images/main page/slider-games-part/cq5dam.thumbnail.319.319(4).png', text: 'The Pilot’s Guide to the Jackal in Call of Duty®: Mobile'},
    {image: './images/main page/slider-games-part/cq5dam.thumbnail.319.319(35).png', text: 'Call of Duty® Shop Hot Drops - July 2022: Zombies Edition'},
    {image: './images/main page/slider-games-part/cq5dam.thumbnail.319.319(32).png', text: 'Fortune’s Keep and New Caldera Map Guide'},
    {image: './images/main page/slider-games-part/cq5dam.thumbnail.319.319(7).png', text: 'The Operator’s Survival Guide to Shi No Numa'},
    {image: './images/main page/slider-games-part/cq5dam.thumbnail.319.319(6).png', text: 'Announcing Call of Duty®: Mobile Season 6 — To the Skies'},
    {image: './images/main page/slider-games-part/cq5dam.thumbnail.319.319(25).png', text: 'Your Guide to Blueprint Gun Game Now Live in Call of Duty®: Vanguard'}
  ]

  return (
    <>
      <div className="container-slider">
        <div className='header-detail'>
          <div className='title-part'>
            <span>Latest news</span>
          </div>
          <div className='filter-part'>
            <div className='filters'>
              <span>filter:</span>
            </div>
            <div className='buttons-filter'>
              <button className='no'></button>
              <button className='no'></button>
              <button className='no'></button>
              <button className='no'></button>
              <button className='no'></button>
            </div>
            <div className='view-all'>
              <a href="#">view all &gt;</a>
            </div>
          </div>
        </div>
        <div className='slider-main'>
          <div className='left-arrow sl'>
            <img src=".\icons\icons8-arrow-91.png" alt="arrow icon" />
          </div>
          <div className='slider-tainer'>
            <SliderItem {...sliderData[0]}/>
            <SliderItem {...sliderData[1]} />
            <SliderItem {...sliderData[2]} />
            <SliderItem {...sliderData[3]} />
            <SliderItem {...sliderData[4]} />
            <SliderItem {...sliderData[5]} />
          </div>
          <div className='right-arrow sl'>
            <img src=".\icons\icons8-arrow-91.png" alt="arrow icon" />
          </div>
        </div>
      </div>
    </>
  )
}
