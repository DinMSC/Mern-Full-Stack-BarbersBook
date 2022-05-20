import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Brico from './components/Brico';
import Treatmnet from './components/Treatment';
import Time from './components/Time';
import Appointment from './components/Appointment';
import Contact from './routes/Contact';
import Location from './routes/Location';
import Home from './routes/Home';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route exact path={'/register'} element={<Register />} />
                    <Route exact path={'/login'} element={<Login />} />
                    <Route exact path={'/brico'} element={<Brico />} />
                    <Route exact path={'/treatment'} element={<Treatmnet />} />
                    <Route exact path={'/time'} element={<Time />} />
                    <Route exact path={'/myinfo'} element={<Appointment />} />
                    <Route exact path={'/contact'} element={<Contact />} />
                    <Route exact path={'/location'} element={<Location />} />
                    <Route exact path={'/'} element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
