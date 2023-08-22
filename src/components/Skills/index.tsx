import { Container } from './styles';
import { skills } from '../../utils/constants';
import {itemVariants } from '../../utils/constants';
import { motion } from 'framer-motion';

export const Skills = () => {

  return (
    <Container id="skills">
      <div className="grid-layout">
        <motion.div
          className="title"
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <h2>Habilidades</h2>
          <p>Aqui estão algumas habilidades que possuo.</p>
        </motion.div>
        <div className="show-skills">
          {skills.map((tech, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
