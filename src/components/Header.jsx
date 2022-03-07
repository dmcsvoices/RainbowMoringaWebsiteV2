import React from 'react'
import logo from '../logo.svg';
import HorzNav from './HorzNav';
import '../App.css';

import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-end; 
`;

function Header() {
  return (
    <Div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <HorzNav />

    </Div>
  )
}

export default Header