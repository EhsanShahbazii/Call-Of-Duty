import './Icon.css';

export default function Icon({image}) {
  return (
    <>
        <div className='icon-tainer'>
            <img src={image} alt="logos" />
        </div>
    </>
  )
}
