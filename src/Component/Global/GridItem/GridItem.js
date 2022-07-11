import './GridItem.css';

export default function GridItem({image, logo, text}) {
  return (
    <>
      <div className="container-gridItem">
        <div className="image-tainer">
        <img src={image} alt="grid item" />
        </div>
          <div className="item-details">
            <div className='logo-images'>
              <img src={logo} alt="logo icon" />
            </div>
            <div className='text-part'>
              <span>{text}</span>
            </div>
          </div>
      </div>
    </>
  )
}
