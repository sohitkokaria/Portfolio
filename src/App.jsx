import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./scenes/Navbar";
import Footer from "./scenes/Footer";
import Home from './pages/Home';
import Resume from './pages/Resume';


const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="resume" element={<Resume />} />
                </Routes>
                <Footer />
            </BrowserRouter>
    );
}

export default App;
