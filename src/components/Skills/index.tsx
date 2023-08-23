import { Container } from './styles';
import { skills } from '../../utils/constants';
import {
  itemsVariantsEixoY,
  containerVariants,
  itemVariantsTitles,
} from '../../utils/constsAnimates';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <Container id="skills">
      <div className="grid-layout">
        <motion.div
          className="title"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <motion.h2 variants={itemVariantsTitles}>Habilidades</motion.h2>
          <motion.p variants={itemVariantsTitles}>
            Aqui estão algumas habilidades que possuo.
          </motion.p>
        </motion.div>
        <div className="show-skills">
          {skills.map((tech, index) => {
            return (
              <motion.div
                key={index}
                variants={itemsVariantsEixoY}
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
