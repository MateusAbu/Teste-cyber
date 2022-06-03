import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Entrar from './Entrar/Entrar';
import FaleConosco from './Fale Conosco/FaleConosco';
import Header from './Header/Header';
import Home from './Home/Home'
import Sobre from './Sobre/Sobre';
import Tabela from './Tabela/Tabela';

function App() {
  return (

    <Router>
      <div className="App">

        <Header />

        <Routes>
          <Route path='/' element={[
            <Home />
          ]} />

          <Route path='/sobre' element={[
            <Sobre />
          ]} />

          <Route path='/tabela' element={[
            <Tabela />
          ]} />

          <Route path='/faleconosco' element={[
            <FaleConosco />
          ]} />

          <Route path='/entrar' element={[
            <Entrar />
          ]} />

        </Routes>
      </div>

    </Router>

  );
}

export default App;
