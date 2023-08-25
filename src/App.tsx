import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';
import { MenuMobile } from './components/MenuMobile';
import { ScroolBar } from './components/ScroolUp';
import AppProvider from './contexts/index';
import { LayoutGroup } from 'framer-motion';
import { Theme } from './tampletes/theme';
function App() {
  return (
    <AppProvider>
      {/* <ThemeProvider theme={dark}> */}
      <Theme>
      <LayoutGroup>
        <main id="main">
          <GlobalStyle />
          <MenuMobile />
          <Header />
          <ScroolBar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </LayoutGroup>
      </Theme>
      {/* </ThemeProvider> */}
    </AppProvider>
  );
}
export default App;
