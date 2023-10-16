import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Phone from '../../assets/Phone Icon.png';
import Email from '../../assets/Email Icon.png';
import Discord from '../../assets/Dicord.png';

const Contact = () => {
   
    const form = useRef();
    const [submitting, setSubmitting] = useState( false );

    const sendEmail = ( e ) => {
        e.preventDefault();
        setSubmitting( true );

        emailjs.sendForm( 'service_eems4tf', 'template_g3kx0be', form.current, '9fXt5OsMnxib8dybY' )
            .then( ( result ) => {
               setSubmitting( false );
                form.current.reset(); // Reset the form
                toast( "Form received. Will contact you soon 😊" );
            } )
            .catch( ( error ) => {
                console.log( error.text );
                setSubmitting( false );
                alert('An error occurred while submitting the form 😣');
            } );
    };

    return (
        <div className="main">
            <div className="contact-section">
                <h1 className="contact-heading">
                    Let’s talk about your project
                </h1>
            <div className="FORM-BOXES">
            <div className="form">

                <form ref={ form } onSubmit={ sendEmail }>

                    <input type="text" name="from_name" placeholder='Your Name' required autoComplete='none'/>

                    <input type="email" name="email_id" placeholder='Your Email' autoComplete='none'/>

                        <input type="text" name="from_name" placeholder='Contact Number'autoComplete='none'/>
                        
                    <textarea name="message" placeholder='Message' autoComplete='none' />
                        
                        <input type="submit"
                            value={ submitting ? 'Sending...' : 
                                "Send Message"
                        }
                            className='submit'
                            disabled={ submitting }
                        />
                        

                </form>

            </div>
            {/* contact icons */ }
            <div className='contact-icons'>
                    <div className="contact-box">
                        <img src={ Phone } alt="" />
                        <div className="contact-box-contant">
                            <h3>Phone Number / WhatsApp</h3>
                            <h2>+92 322 6557970</h2>
                        </div>
                        </div>
                          <div className="contact-box">
                        <img src={ Email } alt="" />
                        <div className="contact-box-contant">
                            <h3>Email Address</h3>
                            <h2>rahimughal@gmail.com</h2>
                        </div>
                        </div>
                          <div className="contact-box">
                        <img src={ Discord } alt="" />
                        <div className="contact-box-contant">
                            <h3>Discord</h3>
                            <h2>rehanmirza</h2>
                            </div>
                            
                        <ToastContainer />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
