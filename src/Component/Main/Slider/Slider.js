import SliderItem from '../../Global/SliderItem/SliderItem';
import './Slider.css';

export default function Slider() {
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
              <span>view all &gt;</span>
            </div>
          </div>
        </div>
        <div className='slider-main'>
          <div className='left-arrow sl'>
            <img src=".\icons\icons8-arrow-91.png" alt="arrow icon" />
          </div>
          <div className='slider-tainer'>
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
            <SliderItem />
          </div>
          <div className='right-arrow sl'>
            <img src=".\icons\icons8-arrow-91.png" alt="arrow icon" />
          </div>
        </div>
      </div>
    </>
  )
}
