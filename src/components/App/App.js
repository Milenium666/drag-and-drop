import './App.css';

import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import Board from '../Board/Board'




function App() {
  return (
    <section className="App">
        <Board/>
    </section>
  );
}

export default App;
