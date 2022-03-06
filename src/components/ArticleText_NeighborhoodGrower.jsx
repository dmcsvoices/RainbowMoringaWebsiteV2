import React from 'react';

import ArticleTitle from './ArticleTitle';
import styled from 'styled-components';

const P = styled.p``;


const articleSection = styled.div`
background-color: rgb(254, 74, 73)!important;
border-style: dotted;
margin: 10px 10px 5px;
padding-left: 100px;
padding-top: 10px;
padding-right: 70px;
padding-bottom: 5px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`;

const Ul = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 10px;
margin-left: 40px;
margin-right: 40px;
margin-bottom:20px;
box-shadow: 2px 2px 7px rgb(22, 7, 7);
background-color: rgb(236, 248, 248);
border-color: rgb(0, 95, 115);
border-radius: 10px; 
border-style: none;`;

const Li = styled.li`
background-color: rgb(229, 236, 233);
font-family: 'Asap', sans-serif;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center; 
margin: 4px;
padding: 4px;   
border-color: rgb(0, 95, 115);
border-style:dotted;
border-radius: 10px; 
word-break: break-word;
white-space: normal;`;


const Button = styled.button``;

function ArticleText_NeighborhoodGrower() {
  return (
    <articleSection className="container">
        <ArticleTitle titleText="Every neighborhood needs a Moringa grower" />        
        <P className="card-text">
            <Ul className = "list-group">
                <Li className="list-group-item">Having a Moringa grower in every neighborhood means that everyone in the neighborhood will have access to high quality nutrition with minimal environmental impact.</Li>
                <Li className="list-group-item">A small Moringa garden can produce enough to share with a small community.</Li>
                <Li className="list-group-item">Moringa is drought resistant and easy to grow.</Li>
                <Li className="list-group-item">A Moringa garden is the perfect place for children to learn about where food comes from.</Li>
                <Li className="list-group-item">Moringa leaves and pods present a perfect opportunity for cooks and chefs to expand their repertoirs!</Li>
                <Li className="list-group-item">Moringa trees attract pollinators like bees, birds and butterflies. The shade they cast creates a peaceful environment for relaxing</Li>
            </Ul>  
        </P>
    </articleSection>
    
  )
}

export default ArticleText_NeighborhoodGrower