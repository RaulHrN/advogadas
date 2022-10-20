import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { AboutUsPage } from './pages/aboutUsPage/AboutUsPage';
import { HomePage } from './pages/homePage/HomePage';
import { ServicePage } from './pages/servicePage/ServicePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/servicos' element={<ServicePage/>}/>
          <Route path='/sobre-nos' element={<AboutUsPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
