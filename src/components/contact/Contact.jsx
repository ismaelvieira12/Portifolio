import React from 'react';
import "../contact/contact.css";

const Contact = () => {
  return (
    
    <section id='contact'className="container contact section">
        <h2 className="section_title">Entre em contato</h2>
      <form className='contact_form'>
        <div className='form_group'>
          <input placeholder='Nome' type="text" name='name' className='nome'/>
        </div>
        <div className='form_group'>
          <input placeholder='Email' type="email" name="email" className='email' />
        </div>
        <div className='form_group_textarea'>
          <textarea placeholder='Escreva aqui...' name="Texto" id="textArea" className='textArea'></textarea>
        </div>
      </form>

    </section>
    
  );
}

export default Contact;