import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/1Landing';
import Budget from './pages/3budget';


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="budget" element={<Budget />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
