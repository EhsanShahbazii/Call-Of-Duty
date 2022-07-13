import React from 'react';
import Footer from './Component/Footer/Footer';
import Modal from './Component/Global/Modal/Modal';
import NavBar from './Component/Header/NavBar';
import GetGame from './Component/Main/GetGame/GetGame';
import Grid from './Component/Main/Grid/Grid';
import Landing from './Component/Main/Landing/Landing';
import Slider from './Component/Main/Slider/Slider';

export default function App() {
  return (
    <>
      <NavBar />
      <Modal />
      <Landing />
      <Grid />
      <Slider />
      <GetGame />
      <Footer />
    </>
  )
}