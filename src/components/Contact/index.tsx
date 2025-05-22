import { Container } from './styles';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { CiLocationOn } from 'react-icons/ci';
import { Form } from '../Form';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemsVariantsEixoX,
  itemVariantsTitles,
} from '../../utils/constsAnimates';
export const Contact = () => {
  const contacts = [
    {
      icon: <AiOutlineWhatsApp />,
      name: 'WhatsApp',
      description: '+55 71 9-9657-9989',
      link: 'https://wa.me/5571996579989',
    },
    {
      icon: <HiOutlineMail />,
      name: 'Email',
      description: 'lucasvelosoalves@outlook.com',
      link: 'mailto:lucasvelosoalves@outlook.com?subject=Olá...',
    },
    {
      icon: <CiLocationOn />,
      name: 'Localização',
      description: 'Lauro de Freitas, BA - BR',
      link: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
    },
  ];
  return (
    <Container id="contact">
      <motion.div
        className="grid-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <div className="title">
          <motion.h2
            variants={itemVariantsTitles}
            transition={{
              duration: 2,
            }}
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            variants={itemVariantsTitles}
            transition={{
              duration: 2,
            }}
          >
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
          </motion.p>
        </div>
        <div className="wrapper-primary">
          <motion.div
            variants={itemsVariantsEixoX}
            transition={{
              duration: 2,
            }}
            className="wrapper-left"
          >
            <Form />
          </motion.div>
          <motion.div
            className="wrapper-right"
            variants={itemsVariantsEixoX}
            transition={{
              duration: 1,
            }}
          >
            <div className="contactsLinks">
              {contacts.map((contact, index) => (
                <div key={index}>
                  <a href={contact.link} target="blank" rel="noopener noreferrer">
                    <span className="img">{contact.icon}</span>
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
      </motion.div>
    </Container>
  );
};
