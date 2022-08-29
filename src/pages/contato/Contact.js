import HeaderPages from '../../components/HeaderPages';
import Footer from '../../components/Footer';
import '../../App.css';
import React from 'react';
import Msg from '../../images/msg.png';


function Contact() {
  return (
        <div className="contact d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-between flex-wrap flex-column flex-sm-colum flex-md-column flex-lg-row">
            <div className="d-flex align-items-center title-send-msg justify-content-center">
                <p>Send me Your Message</p>
            </div>
            <div className='d-flex space-form flex-row justify-content-between'>
                <div className="form-contact d-flex align-items-center justify-content-center">
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
                
                <div className="sent-msg d-flex align-items-center">
                    <img src={Msg} alt="Sent your Message"/>
                </div>
            </div>
        </div>
  );
}

export default Contact;