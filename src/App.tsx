import { Header } from './components/Header'
import { Hero } from './components/Hero' 
import { About } from './components/About'; 
//import { Techs } from './components/Techs'; 
import { Projects } from './components/Projects'; 
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';
import { MenuMobile } from './components/MenuMobile';
import { ScroolBar } from './components/ScroolUp';
import AppProvider from './contexts/AppProvider';

function App() { 
  return (
    <AppProvider>
      <main id='main'>
        <GlobalStyle />
        <MenuMobile/>
        <Header/>
        <ScroolBar/>
        <Hero/>
        <About />
        {/* <Techs/> */}
        <Projects/> 
        <Contact/> 
        <Footer/>
      </main>
    </AppProvider>
  )
}
export default App;
