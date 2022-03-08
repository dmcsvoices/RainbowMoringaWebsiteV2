import React from 'react'
import ArticleTitle from './ArticleTitle';
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarrot, faDna, faMugHot, faAppleWhole, faFish} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCarrot, faDna, faMugHot, faAppleWhole, faFish
   );

const P = styled.p`
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
margin-top: 10px;
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
border-style:solid;
border-radius: 10px; 
word-break: break-word;
white-space: normal;`;



function ArticleText_moringaComparison() {
  return (
    <articleSection className="container">
    <ArticleTitle titleText="How does Moringa compare to other supplements?" />        
        <P>The scientific community has spoken! Moringa Oliferia has been studied in laboratories worldwide. It's usefulness and benefits offered are well documented. The following list shows how Moringa stacks up against various well known foods. Gram for gram of fresh Moringa:</P>
                    <Ul>
                        <Li><FontAwesomeIcon icon="fa-solid fa-carrot"  size="2x"/> has Six times more Vitamin C than orange</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-dna"  size="2x"/> is equal to Three Bananas</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-fish"  size="2x"/> has three times the Protien that spinach has, and double the number of carbohydates</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-mug-hot"  size="2x"/> can be consumed as a tea, in cold beverages, or consumed in tablets or capsules</Li>
                        <Li><FontAwesomeIcon icon="fa-solid fa-apple-whole"  size="2x"/> is nutrutionally dense and can replace other forms of produce that may not be readily available or out of season</Li>
                    </Ul>
                    <P>And if you still need proof, here are links to some scientific studies</P>
                    <Ul>
                        <Li><a href="https://www.sciencedirect.com/science/article/pii/S2213453016300362#sec0015">Nutrition Study of Moringa</a></Li>
                        <Li><a href="https://pubmed.ncbi.nlm.nih.gov/22403543/">Moringa and Blood Sugar</a></Li>
                        <Li><a href="https://pubmed.ncbi.nlm.nih.gov/18249514/">Moringa and antioxidant properties</a></Li>
                        <Li><a href="https://link.springer.com/article/10.1007/s13197-012-0859-9">Moringa and effects on Post-Menopausal Women</a></Li>
                        <Li><a href="https://pubmed.ncbi.nlm.nih.gov/17184181/">Moringa and diabetes</a></Li>
                    </Ul>
                
    </articleSection>
  )
}

export default ArticleText_moringaComparison