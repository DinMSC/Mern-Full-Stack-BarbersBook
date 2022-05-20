import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src='./assests/Video2.mp4' type='' />
            </video>
            <div className='content'>
                <img
                    src='./assests/finalLogo.png'
                    className='MainLogo'
                    alt='logo'
                />
                <p>"Find the best version of yourself"</p>
                <ol>
                    “Spend less time scheduling appointments, <br></br>reduce
                    no-shows, and grow your business like never before”
                </ol>
                <div>
                    <Link to='/contact' className='btn'>
                        LOGIN
                    </Link>
                    <Link to='/appointment' className='btn'>
                        REGISTER
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Video;
