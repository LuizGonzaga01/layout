import './App.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/header.scss';
import './styles/content.scss';
import './styles/footer.scss';




export function App() {
  return (
    <>
      <div style={{ width: '100%', height: '56.7rem', display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <div style={{ width: '100%', height: '100%' }}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}