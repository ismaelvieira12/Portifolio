import React from 'react';
import "../contact/contact.css";

const Contact = () => {
   const enviarWhatsApp = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const telefone = "5585998024170";
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const textArea = document.querySelector('#textArea');

    const texto = `Olá, meu nome é ${name.value}, meu email é ${email.value}, : ${textArea.value}.`;
    const mensagemFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`;
    window.open(url, '_blank');
  }

  return (
    <section id='contact'className="container contact section">
        <h2 className="contact_title">Entre em contato</h2>
      <form className='contact_form'onSubmit={enviarWhatsApp}>
        <div className='form_group'>
          <input placeholder='Nome' type="text" name='name' className='nome' id='name'/>
          <input placeholder='Email' type="email" name="email" className='email'  id='email'/>
        </div>
        <div className='form_group_textarea'>
          <textarea placeholder='Escreva aqui...' name="Texto" id="textArea" className='textArea'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Enviar para WhatsApp</button>
      </form>
    </section>
    
  );
}

export default Contact;