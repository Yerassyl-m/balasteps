import React from 'react';
import Header from '../header/Header';
import Bodymainpages from '../bodymainpage/Bodymainpages';
import Footer from '../../../components/footer/Footer';
// import './Layout.css';

function Layout() {
    return (
        <div className="Layout">
            <Header />
            <Bodymainpages />
            <Footer />
        </div>
    )
}
export default Layout;