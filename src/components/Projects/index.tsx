import { Container } from './styles';
import projectMemory from '../../assets/Project Memory Game.png';
import projectRide from '../../assets/Project Ride.png';
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'; 

export function Projects() {
  const projects = [
    {      
      image: projectRide,
      name: 'App Ride',
      description: 'O aplicativo mede a velocidade de uma atividade como corrida de bicicleta, registrando  dados como  distância percorrida, tempo e localização.',
      techUsed: 'Java Script',
      linkGitHub: 'https://github.com/Lucasvalves/app_ride',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'frontend',
    },
    {
      image: projectMemory,
      name: 'Gerenciador de Salão',
      description: 'O projeto tem como objetivo fazer a gerência de usuários e clientes de salão de beleza.',
      techUsed: 'Node JS, TypeScript, React',
      linkGitHub: 'https://github.com/Lucasvalves/sistema-de-agendamento',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'frontend',
    },
    {
      image: projectMemory,
      name: 'Jogo da Memória',
      description: 'Projeto jogo da memoria.',
      techUsed:'React',
      linkGitHub: 'https://github.com/Lucasvalves/jogoDaMemoriaReact',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'frontend',
    },
    {
      image: '',
      name: 'SysCopa',
      description: 'Projeto realiza o inserção, seleção, atualização e deleção de dados existentes uma Copa do Mundo como nome de seleções, árbitros, técnicos e fases.',
      techUsed: 'Mysql, Python',
      linkGitHub: 'https://github.com/Lucasvalves/sys_copa',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'backend',     
    },
  ]

  return (
    <Container id='projects'>
      <h2>Projetos</h2>
      <div>
        {projects.map((projetc, key)=>(
                <div key={key} className='show-projetcs'>
                  <div className='container-img'>
                    {projetc.stack == 'backend' ? 
                      <p>Projeto de backend</p> : 
                      <img src={projetc.image} 
                    />}
                  </div>
                  <div className='container-data'>
                    <h4>{projetc.name}</h4>
                    <p>{projetc.description}</p>
                    <div className='align-items'>
                      <div className='links'>
                        {projetc.stack != 'backend' ? 
                          <div>
                            <a href={projetc.linkGitHub}target='_blank' title='Ver Código'>
                              <AiFillGithub size='20'/>
                            </a>
                            <a href={projetc.page}target='_blank' title='Ver Projeto'>
                              <AiOutlineLink size='20'/> 
                            </a> 
                          </div>
                        :
                          <div>
                            <a href={projetc.linkGitHub}target='_blank' title='Ver Código'>
                              <AiFillGithub size='20'/>
                            </a>
                          </div>}
                      </div>
                      <p>{projetc.techUsed}</p>
                    </div>
                  </div>
                </div>   
        ))}
      </div>
    </Container>
  )
}
