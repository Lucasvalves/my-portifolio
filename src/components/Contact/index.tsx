import { Container } from './styles';
import { FaWhatsapp} from 'react-icons/fa';
import {HiOutlineEnvelope, HiOutlineMapPin, HiCheckCircle} from 'react-icons/hi2'; 
import {FaSpinner } from 'react-icons/fa'; 
import {FormEvent, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Button from '../Button';
import useAppContext from '../../hook/useAppContext';

export function Contact() {

  const {loading, setLoading, success, setSuccess, error, setError} = useAppContext();
  const form = useRef<HTMLFormElement | null>(null);
  
  const sendEmail = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    if(!form.current) return
    setLoading(true);

    emailjs
      .sendForm(
         "service_r7c3k11",
         "template_vu60cok",
         form.current,
         "BxT5RBo0A4uwq3_HR"
        
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false);
        },
        (error) => {
          setError(true)
          setLoading(false);
          console.log(error);
        }
      )
  }
  const contacts = [
    {
      name: 'WhatsApp',
      description: '+55 71 9-9657-9989',
      link: 'https://wa.me/5571996579989',
      icon: <FaWhatsapp className='iconContatc'/>,
    },
    {
      name: 'Email',
      description: 'lucasvelosoalves@outlook.com',
      link: 'mailto:lucasvelosoalves@outlook.com?subject=Olá...',
      icon: <HiOutlineEnvelope className='iconContatc'/>,
    },
    {
      name: 'Localização',
      description: 'Lauro de Freitas, BA - BR',
      link: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      icon: <HiOutlineMapPin className='iconContatc'/>,
    }
  ]
  return (
    <Container id="contact">
    <div className="title">
      <h2>Entre em Contato</h2>
      <p>
      Entre em contato por formulário ou WhatsApp, com certeza irei poder te ajudar.
      </p>
    </div> 
    <div className="wrapper-primary">
      <div className="wrapper-left">
        <form ref={form} onSubmit={sendEmail} >
          <div className='container-show-textarea'>   
            <label htmlFor="message">
              Mensagem:
            </label>
            <textarea  
              name="message"
              id="message" 
              required
            />
          </div>
          <div className="container-show-inputs">
            <div className="align-inputs">        
              <label htmlFor="fullName">
                Seu nome:
              </label>
              <input
                type="text" 
                name="fullName"
                id="fullName"
                className="input"
                required
              />
            </div> 
            <div className="align-inputs"> 
              <label htmlFor="fullName">
                      Seu email:
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                className="input"
                required
              />
            </div> 
          </div>
          <Button 
            type="submit"
            disabled={loading}
          >
            {loading? loading && <FaSpinner className="spinner"/> :success && <HiCheckCircle />}
            Enviar mensagem
          </Button>
        </form>
      </div>
      <div className="wrapper-right">
        <div className="contactsLinks">{contacts.map((contact, index)=>(
          <p key={index}>
            <a href={contact.link} target="blank">
              <span>{contact.icon}</span>
              <span>
                <h4>{contact.name}</h4>
                <h4>{contact.description}</h4>
              </span> 
            </a>
          </p>
        ))}</div>
      </div>      
    </div>
    </Container>
  )
}