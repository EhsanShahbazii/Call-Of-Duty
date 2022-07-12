import './GetGame.css';
import GameItem from '../../Global/GameItem/GameItem';

export default function GetGame() {

  const gameData = [
    {image: './images/main page/get-the-game-part/1.jpeg', text: 'blockbuster campion multiplayer and zombie'},
    {image: './images/main page/get-the-game-part/2.jpg', text: 'the iconic modern warfare ii series is back guys'},
    {image: './images/main page/get-the-game-part/3.webp', text: 'free to play battle royale and more in now available'},
    {image: './images/main page/get-the-game-part/4.jpg', text: 'the thrill of call of duty on the go and play it'}
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
