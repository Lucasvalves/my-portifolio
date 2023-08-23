import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useAppContext from '../../hook/useAppContext';
import { Button } from '../Button';
import { HiCheckCircle } from 'react-icons/hi2';
import { FaSpinner } from 'react-icons/fa';

export const Form = () => {
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
  );
};
