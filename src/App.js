import './App.css';
import { Home } from './components/Home';
import { SideBar } from './components/SideBar';
import { Conteudo } from './components/Conteudo';
import { Footer } from './components/Footer';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/home.scss';
import './styles/conteudo.scss';
import './styles/footer.scss';




export function App() {
  return (
    <>
      <div style={{ width: '100%', height: '56.7rem', display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div style={{ width: '100%', height: '100%' }}>
          <Home />
          <Conteudo />
          <Footer />
        </div>
      </div>
    </>
  );
}