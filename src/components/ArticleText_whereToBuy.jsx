import React from 'react';
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
margin: 5px 45px 5px;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

function ArticleText_whereToBuy() {
  return (
    <>
      <articleSection className="card">
        <P className="card-text">
        Rainbow Moringa grows its Moringa trees in Sunny Oceanside, CA. We harvest fresh moringa leaves throughout the spring, summer, and fall. </P>
        <P className="card-text">This bounty allows us to press our own capsules and make them available to you!</P>
          
      </articleSection>
    </>
  )
}

export default ArticleText_whereToBuy