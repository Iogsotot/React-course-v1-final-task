import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './App.css';


const App = () => {
  const anyString = "wewewee";


  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default App;