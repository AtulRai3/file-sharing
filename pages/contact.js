import React, { useState } from 'react';
import Header from '../app/_components/Header';
import Footer from '../app/_components/_components/Footer'; // Import Footer component
import emailjs from 'emailjs-com';
import './globals.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w8haytn', 'template_elhk0oe', e.target, 'XEetsTxczxpFca6O9')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsSuccess(true);
       
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.error('Email sending failed:', error);
        // You can add further logic here, like showing an error message to the user
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1, backgroundColor: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
        {!isSuccess ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <label htmlFor="name" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginBottom: '1rem' }} />

            <label htmlFor="email" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginBottom: '1rem' }} />

            <label htmlFor="subject" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Subject</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginBottom: '1rem' }} />

            <label htmlFor="message" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginBottom: '1rem', height: '200px' }} />

            <button type="submit" style={{ padding: '0.5rem 1rem', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
          </form>
        ) : (
          <div style={{ backgroundColor: 'rgba(0, 123, 255, 0.3)', padding: '2rem', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <p style={{ fontSize: '1.5rem', color: '#fff' }}>Thank you for contacting us! We'll get back to you soon.</p>
          </div>
        )}
      </div>
      <Footer style={{ flexShrink: 0 }} /> {/* Add Footer component here */}
    </div>
  );
};

export default ContactForm;
