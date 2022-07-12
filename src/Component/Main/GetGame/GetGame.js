import './GetGame.css';
import GameItem from '../../Global/GameItem/GameItem';

export default function GetGame() {

  const gameData = [
    {image: './images/main page/get-the-game-part/COD-Mobile-x-Girls-Frontline.jpg', text: 'blockbuster campion multiplayer and zombie'},
    {image: './images/main page/get-the-game-part/callofdutycoldwar.jpg', text: 'the iconic modern warfare ii series is back'},
    {image: './images/main page/get-the-game-part/578050-call-of-duty-season-one-extended.jpg', text: 'free to play battle royale and more'},
    {image: './images/main page/get-the-game-part/6ed05ced-c49a-416b-b1fa-289898162811.jpeg', text: 'the thrill of call of duty on the go'}
  ]

  return (
    <>
    <div className="container-game">
      <h1 className='title'>Get the game</h1>
      <div className='game-tainer'>
        <a href="#"><GameItem {...gameData[0]} /></a>
        <a href="#"><GameItem {...gameData[1]} /></a>
        <a href="#"><GameItem {...gameData[2]} /></a>
        <a href="#"><GameItem {...gameData[3]} /></a>
      </div>
    </div>
    </>
  )
}
