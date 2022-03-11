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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;


`;


const P = styled.p`
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;


word-break: break-word;
white-space: normal;
`;





function ArticleText_whereToBuy() {
  return (
    <>
    
    <ArticleTitle titleText="Where can I get locally sourced Moringa?" />
    <Row className="row">
      <div className="col-sm-10">
        <articleSection className="card">
          <img src="../RM_Capsules_sm.png" className="card-img-top" alt="Moringa powder in capsule form"/>
          <div classname="card-body">
            
            <P className="card-text">
            Rainbow Moringa grows its Moringa trees in Sunny Oceanside, CA. We harvest fresh moringa leaves throughout the spring, summer, and fall. This bounty allows us to press our own capsules and make them available to you!
            </P>
          </div>
        </articleSection>
        </div>  
      </Row>
    </>
  )
}

export default ArticleText_whereToBuy