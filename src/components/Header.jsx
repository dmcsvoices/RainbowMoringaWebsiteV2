import React from 'react'
import logo from '../logo.svg';
import '../App.css';

import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faLeaf, faCannabis, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faYoutube, faInstagram,  faFacebook, faTiktok, faLinkedin);

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
      <div className="horzNav">
        <FontAwesomeIcon className="navIcon" icon="fa-brands fa-youtube" size="2x" />
        <FontAwesomeIcon className="navIcon" icon="fa-brands fa-instagram" size="2x"/>
        <FontAwesomeIcon className="navIcon" icon="fa-brands fa-facebook" size="2x"/>
        <FontAwesomeIcon className="navIcon" icon="fa-brands fa-linkedin" size="2x"/>
        <FontAwesomeIcon className="navIcon" icon="fa-brands fa-tiktok" size="2x"/>
      </div>
    </Div>
  )
}

export default Header