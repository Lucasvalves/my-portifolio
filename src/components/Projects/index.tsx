import { Container } from './styles';
import projectMemory from '../../assets/Project Memory Game.png';
import projectRide from '../../assets/Project Ride.png';
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'; 

export function Projects() {
  const projects = [
    {      
      image: projectRide,
      name: 'App Ride',
      description: 'O aplicativo mede a velocidade de uma atividade como corrida de bicicleta, registrando  dados como  distância percorrida, tempo e localização. Feito Java Script',
      linkGitHub: 'https://github.com/Lucasvalves/app_ride',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'frontend',
    },
    {
      image: projectMemory,
      name: 'Gerenciador de Salão',
      description: 'O projeto tem como objetivo fazer a gerência de usuários e clientes de salão de beleza, feito em Node JS, TypeScript, React',
      linkGitHub: 'https://github.com/Lucasvalves/sistema-de-agendamento',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'frontend',
    },
    {
      image: projectMemory,
      name: 'Jogo da Memória',
      description: 'Projeto jogo da memoria feito em React',
      linkGitHub: 'https://github.com/Lucasvalves/jogoDaMemoriaReact',
      page: 'https://goo.gl/maps/Cmyke6t7GYNX1uabA',
      stack: 'frontend',
    },
    {
      image: '',
      name: 'SysCopa',
      description: 'Projeto realiza o inserção, seleção, atualização e deleção de dados existentes uma Copa do Mundo como nome de seleções, árbitros, técnicos e fases. Feito em Mysql, Python',
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
                <img src={projetc.image} alt={projetc.name} 
              />}
            </div>
            <div className='container-data'>
              <div className='align-items'>
                <h4>{projetc.name}</h4>
                {projetc.stack != 'backend' ?              
                  <div className='links'>
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
              <p>{projetc.description}</p>
            </div>
          </div>   
        ))}
      </div>
    </Container>
  )
}
