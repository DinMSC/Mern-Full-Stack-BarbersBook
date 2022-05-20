import React from 'react';
import './LocationStyles.css';

import { Link } from 'react-router-dom';

const Location = () => {
    return (
        <div className='location'>
            <div className='left'>
                <h1>Location</h1>
                <p>
                    We are planning to open different branches all over Bosnia
                    and Herzegovina. Look forward for great offers ahead!
                </p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack bottom'>
                        <img
                            src='./assests/map.png'
                            className='map'
                            alt='map'
                        />
                    </div>
                </div>
                <div className='opening-hours'>
                    <h1>
                        <div>
                            <div className='OpenHour'>
                                Opening Hours
                                <br />
                            </div>
                            <p>
                                <br />
                                Monday - Friday : 10:00 am - 05:00 pm
                                <br />
                                Saturday : 10:00 am - 02:00 pm
                            </p>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Location;
