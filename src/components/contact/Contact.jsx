import React from 'react';
import "../contact/contact.css";

const Contact = () => {
  return (
    <>
    <section id='contact'className="container contact section">
        <h2 className="section_title">Contato</h2>
      <form className='contact_form'>
        <div>
          <input placeholder='Nome' type="text" name='name' className='nome'/>
        </div>
        <div>
          <input placeholder='Email' type="email" name="email" className='email' />
        </div>
        <div>
          <textarea placeholder='Escreva aqui...' name="Texto" id="textArea" className='textArea'></textarea>
        </div>
      </form>

    </section>
    </>
  );
}

export default Contact;