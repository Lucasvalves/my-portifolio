import { Container } from './styles';
import {skills} from '../../utils/constants';

export function Skills() {
  return (
    <Container id="skills">
      <div className="grid-layout">
        <div className="title">
          <h2>Habilidades</h2>
          <p>Aqui estão algumas habilidades que possuo.</p>
        </div>
        <div className="show-skills">
          {skills.map((tech, key) => {
            return (
              <div key={key}>
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
