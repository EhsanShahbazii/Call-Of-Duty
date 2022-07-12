import './GameItem.css';

export default function GameItem({image, text}) {
  return (
    <>
      <div className="container-get">
        <span className='text-detail'>{text}</span>
        <img src={image} alt="game images" />
      </div>
    </>
  )
}
