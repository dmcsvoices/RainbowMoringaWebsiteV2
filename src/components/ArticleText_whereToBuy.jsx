import React from 'react';
import ArticleTitle from './ArticleTitle';
import styled from 'styled-components';

const articleSection = styled.div`
margin: 10px 10px 5px;
padding-left: 70px;
padding-top: 10px;
padding-right: 70px;
padding-bottom: 5px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;


const P = styled.p`
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;
box-shadow: 2px 2px 7px rgb(22, 7, 7);
background-color: rgb(236, 248, 248);
border-color: rgb(0, 95, 115);
border-radius: 10px; 
border-style: none;

word-break: break-word;
white-space: normal;
`;





function ArticleText_whereToBuy() {
  return (
      <articleSection className="container">
        <ArticleTitle titleText="Where can I get locally sourced Moringa?" />
        <P className="card-text">
        Rainbow Moringa grows its Moringa trees in Sunny Oceanside, CA. We harvest fresh moringa leaves throughout the spring, summer, and fall. This bounty allows us to press our own capsules and make them available to you! </P>
      </articleSection>
  )
}

export default ArticleText_whereToBuy