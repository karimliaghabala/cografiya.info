import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './assets/components/header/header';
import { Main } from './assets/components/main-sections/main';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
      </Routes>
    </>
  )
}

export default App