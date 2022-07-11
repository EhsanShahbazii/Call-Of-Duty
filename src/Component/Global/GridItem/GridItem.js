import './GridItem.css';

export default function GridItem() {
  return (
    <>
      <div className="container-gridItem">
        <div className="image-tainer">
        <img src="./images/main page/grid-pics-part/p1.jpg" alt="grid item" />
        </div>
          <div className="item-details">
            <div className='logo-images'>
              <img src="./images/main page/logos-part/codm-white.png" alt="logo icon" />
            </div>
            <div className='text-part'>
              <span>Enough is never enough. Enough is never enough. Enough is never enough.</span>
            </div>
          </div>
      </div>
    </>
  )
}
