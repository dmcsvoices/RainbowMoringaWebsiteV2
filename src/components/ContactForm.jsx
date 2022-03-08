import React from 'react';
import ArticleTitle from './ArticleTitle';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faCannabis, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

library.add(fab, faLeaf, faCannabis, faSeedling);



const Section = styled.div`
    visibility: visible;
    display: flex;
    flex-direction: column;

`;

const Form = styled.form`
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


function ContactForm() {
  return (
    <Section className="form-section">
        <ArticleTitle titleText="Southern California Moringa is a seasonal product. Therefore stock is limited. Please use the form  below to express your interest in obtaining fresh Moringa. We will get back to you immediately!" />
        <p> 
            
            <Form className="contact-form" id="form-WantToBuy">
            <div className="form-group">
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"></input>
            </div> 
            <div className="form-group">
                
                <label for="phonenum">Phone Number:</label>
                <input type="text" id="phonenum" name="phonenum"></input>
                <label for="emailaddr">Email Address:</label>
                <input type="text" id="emailaddr" name="emailaddr"></input>
               
            </div>   
            <input type="submit" value="Submit"></input>
            </Form>
            
        </p>
    </Section>
   

  )
}

export default ContactForm