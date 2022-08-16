import HeaderPages from './components/HeaderPages';
import Footer from './components/Footer';
import './App.css';
import React from 'react';
import Msg from './images/msg.png';


function Contact() {
  return (
    <div className="Contact">
        <HeaderPages/>
        <div class="contact">
            <div class="form-contact">
                <form action="/contact-form" method="post">
                    <label for="name">Name:</label>
                    <input type="texto" id="nome" name="name_user"/>

                    <label for="twitter">Twitter:</label>
                    <input type="twitter" id="twitter" name="twitter_user"/>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email_user"/>
                    
                    <label for="subject">Subject:</label>
                    <input type="email" id="email" name="email_user"/>

                    <label for="text">Text:</label>
                    <textarea id="text-area-contact" name="text_user"></textarea>
                </form>
            </div>
            <div class="sent-msg">
                <img src={Msg} alt="Sent your Message"/>
            </div>
        </div>
 
     
        <Footer/>
    </div>
  );
}

export default Contact;