import React from 'react';
import Contennt from '../components/Contennt';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import CreateGlobalStyle from "../styles/global";


function App() {
    return (
        <>
            <div style={{ width: '100%', height: '56.7rem', display: 'flex', flexDirection: 'row' }}>
                <SideBar />
                <div style={{ width: '100%', height: '100%' }}>
                    <Header />
                    <Contennt />
                    <Footer />
                </div>
            </div>
            <CreateGlobalStyle />
        </>
    );
}

export default App;
