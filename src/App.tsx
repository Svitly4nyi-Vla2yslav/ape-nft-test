import { Global } from '@emotion/react';
import GlobalStyles from './App.styled';
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <Header/>
      <About/>
    </div>
  )
}

export default App