import { Global } from '@emotion/react';
import GlobalStyles, { GlobalContainer } from './App.styled';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import MindMap from './components/MindMap/MindMap';
import FAQ from './components/FAQ/FAQ';

const App = () => {
  return (
    <GlobalContainer>
      <Global styles={GlobalStyles} />
      <Header/>
      <About/>
      <MindMap/>
      <FAQ/>
    </GlobalContainer>
  )
}

export default App