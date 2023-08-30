import '../../App.css';
import email from '../../images/email.gif';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  
  const form = useRef();
     
  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p20e7ud', 'template_h6nvhqn', form.current, 'pB3YiTKho2THKckzH')
      .then((result) => {
        alert('Message sent successfully.');
        console.log(result.text);
      }, (error) => {
        alert('An error occurred in sending the message.');
        console.log(error.text);
      });
  }


  return (
        <div className="contact d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-between flex-wrap flex-column flex-sm-colum flex-md-column flex-lg-row">
            <div className="d-flex align-items-center title-send-msg justify-content-center">
                <p>Send me Your Message</p>
            </div>
            <div className='d-flex space-form flex-row justify-content-between'>
                <div className="form-contact d-flex align-items-center justify-content-center">
                    <form ref={form} onSubmit={enviarEmail} action="/contact-form" method="post">
                        <input type="name" id="nome" placeholder="Name" name="name_user"/>

                        <input type="twitter" id="twitter" placeholder="Twitter" name="twitter_user"/>

                        <input type="email" id="email" placeholder="E-mail" name="email_user"/>
                        
                        <input type="subject" id="email" placeholder="Subject" name="subject_user"/>

                        <textarea id="text-area-contact" name="text_user" placeholder="Message"></textarea>

                        <div className='d-flex justify-content-end'>
                        <button>Enviar</button>
                        </div>
                    </form>
                </div>
                
                <div className="sent-msg d-flex align-items-center">
                    <img src={email} alt="Sent your Message"/>
                </div>
            </div>
        </div>
  );
}

export default Contact;