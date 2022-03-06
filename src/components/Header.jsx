import React from 'react'
import logo from '../logo.svg';
import '../App.css';

function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/><p>This space to contain Header Rainbow Moringa content.</p>
      </header>
    </div>
  )
}

export default Header