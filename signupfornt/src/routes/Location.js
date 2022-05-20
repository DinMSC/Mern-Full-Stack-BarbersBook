import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Location from '../components/Location';

const location = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='LOCATION' text='' />
            <Location />
            <Footer />
        </div>
    );
};

export default location;
