import React from 'react';
import NavBar from './Component/Header/NavBar';
import Grid from './Component/Main/Grid/Grid';
import Landing from './Component/Main/Landing/Landing';

export default function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Grid />
    </>
  )
}