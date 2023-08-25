import { Container } from './styles';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { projects } from '../../utils/constants';
import {
  containerVariants,
  itemVariantsTitles,
  itemsVariantsEixoX,
} from '../../utils/constsAnimates';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <Container id="projects">
      <motion.div
        className="grid-layout"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        variants={containerVariants}
        
      >
        <motion.h2 

        variants={itemVariantsTitles}
        transition= {{

          duration: 2,
        }}>Projetos</motion.h2>
        
        <div>
          {projects.map((projetc, key) => (
            <motion.div
              key={key}
              className="show-projetcs"
              variants={itemsVariantsEixoX}
              transition= {{

                duration: 2,
              }}
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
        </div>
      <motion.span className="seeMore"
             variants={itemVariantsTitles}
        transition= {{

          duration: 2,
        }}><a href="https://github.com/Lucasvalves?tab=repositories" target="blank">Ver mais projetos</a></motion.span>

      </motion.div>
    </Container>
  );
};
