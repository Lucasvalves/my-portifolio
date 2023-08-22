import { Container } from './styles';
import { HiCheckCircle } from 'react-icons/hi2';
import { FaSpinner } from 'react-icons/fa';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../Button';
import useAppContext from '../../hook/useAppContext';
import { contacts } from '../../utils/constants';
import { motion } from 'framer-motion';

export const Contact = () => {
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
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </motion.p>
        </div>
        <div className="wrapper-primary">
          <motion.div
            className="wrapper-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: 2, duration: 2 }}
          >
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
          </motion.div>
          <motion.div className="wrapper-right"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{delay: 2.5, duration: 2 }}>
            <div className="contactsLinks">
              {contacts.map((contact, index) => (
                <div key={index}>
                  <a href={contact.link} target="blank">
                    <span>
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="img"
                      />
                    </span>
                    <span>
                      <h4>{contact.name}</h4>
                      <h4>{contact.description}</h4>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
