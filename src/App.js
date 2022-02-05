import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import AboutPage from './pages/AboutPage';
import HomePage from './components/HomePage';
import AboutIconLink from './components/AboutIconLink';


function App() {    

    return (
        <Router>
                <Header />
                
                    <Routes>
                        <Route exact path='/' element={
                            <div className='container'>
                                <HomePage />
                                <AboutIconLink />
                            </div>
                        } />
                        <Route path='/about' element={
                            <div className='container'>
                                <AboutPage />
                            </div>
                        } />
                    </Routes>
                
        </Router>      
    )

    
}

export default App