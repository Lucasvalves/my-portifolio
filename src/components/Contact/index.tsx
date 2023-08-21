import { Container } from './styles';
import { HiCheckCircle } from 'react-icons/hi2';
import { FaSpinner } from 'react-icons/fa';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../Button';
import useAppContext from '../../hook/useAppContext';
import { contacts } from '../../utils/constants';

export function Contact() {
  const { loading, setLoading, success, setSuccess, error, setError } =
    useAppContext();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        'service_r7c3k11',
        'template_vu60cok',
        form.current,
        'BxT5RBo0A4uwq3_HR',
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (err) => {
          setError(true);
          setLoading(false);
          console.log(err, error);
        },
      );
  };

  return (
    <Container id="contact">
      <div className="grid-layout">
        <div className="title">
          <h2>Entre em Contato</h2>
          <p>
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </p>
        </div>
        <div className="wrapper-primary">
          <div className="wrapper-left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="container-show-textarea">
                <label htmlFor="message">Mensagem:</label>
                <textarea name="message" id="message" required rows={5} />
              </div>
              <div className="container-show-inputs">
                <div className="align-inputs">
                  <label htmlFor="fullName">Seu nome:</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="input"
                    required
                  />
                </div>
                <div className="align-inputs">
                  <label htmlFor="fullName">Seu email:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input"
                    required
                  />
                </div>
              </div>
              <Button type="submit" disabled={loading}>
                {loading
                  ? loading && <FaSpinner className="spinner" />
                  : success && <HiCheckCircle />}
                Enviar mensagem
              </Button>
            </form>
          </div>
          <div className="wrapper-right">
            <div className="contactsLinks">
              {contacts.map((contact, index) => (
                <div key={index}>
                  <a href={contact.link} target="blank">
                    <span>
                      <img src={contact.image} alt={contact.name} />
                    </span>
                    <span>
                      <h4>{contact.name}</h4>
                      <h4>{contact.description}</h4>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
