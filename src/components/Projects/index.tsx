import { Container } from './styles';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { projects } from '../../utils/constants';
export function Projects() {
  return (
    <Container id="projects">
      <div className="grid-layout">
        <h2>Projetos</h2>
        <div>
          {projects.map((projetc, key) => (
            <div key={key} className="show-projetcs">
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
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
