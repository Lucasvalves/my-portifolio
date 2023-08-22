import { Container } from './styles';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import {
  projects,
  containerVariants,
  projectsitemVariants,
} from '../../utils/constants';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <Container id="projects">
      <div className="grid-layout">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          Projetos
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((projetc, key) => (
            <motion.div
              key={key}
              className="show-projetcs"
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              variants={projectsitemVariants}
            >
              <div className="container-img">
                {projetc.stack == 'backend' ? (
                  <p className="back">Projeto Backend</p>
                ) : (
                  <img src={projetc.image} alt={projetc.name} />
                )}
              </div>
              <div className="container-data">
                <div className="align-items">
                  <h4>{projetc.name}</h4>
                  {projetc.stack != 'backend' ? (
                    <div className="links">
                      <a
                        href={projetc.linkGitHub}
                        target="_blank"
                        title="Ver Código"
                      >
                        <AiFillGithub size="20" />
                      </a>
                      <a
                        href={projetc.page}
                        target="_blank"
                        title="Ver Projeto"
                      >
                        <AiOutlineLink size="20" />
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        href={projetc.linkGitHub}
                        target="_blank"
                        title="Ver Código"
                      >
                        <AiFillGithub size="20" />
                      </a>
                    </div>
                  )}
                </div>
                <p>{projetc.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};
