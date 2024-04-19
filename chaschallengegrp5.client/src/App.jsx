import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/1Landing';
import Budget from './pages/3budget';
import Party from './pages/2party';
import Activities from './pages/4activites';
import Food from './pages/5food';
import Events from './pages/6events';
import Result from './pages/7result';


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="budget" element={<Budget />} />
                <Route path="companion" element={<Party />} />
                <Route path="activites" element={<Activities />} />
                <Route path='food' element={<Food />} />
                <Route path='eventes' element={<Events />} />
                <Route path='result' element={<Result />} />
                {/* Måste göra login logout och sign up pages */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
