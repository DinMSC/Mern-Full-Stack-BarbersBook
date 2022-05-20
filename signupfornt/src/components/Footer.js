import React from 'react';
import './FooterStyles.css';
import {
    FaFacebook,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaSearchLocation,
    FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation
                            size={20}
                            style={{ color: '#ffffff', marginRight: '2rem' }}
                        />
                        <div>
                            <p>123 Acme St.</p>
                            <h4>Houston, Tx</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <FaPhone
                            size={20}
                            style={{ color: '#ffffff', marginRight: '2rem' }}
                        />
                        <div>
                            <p>Contact us:</p>
                            <h4>+1800-234-1234</h4>
                        </div>
                    </div>
                    <div className='email'>
                        <FaMailBulk
                            size={20}
                            style={{ color: '#ffffff', marginRight: '2rem' }}
                        />
                        <div>
                            <p>Email:</p>
                            <h4>barbersbook@gmail.com</h4>
                        </div>
                    </div>

                    <div className='right'>
                        <h4>About the company</h4>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam"
                        </p>
                        <div className='social'>
                            <FaFacebook
                                size={30}
                                style={{
                                    color: '#ffffff',
                                    marginRight: '1rem',
                                }}
                            />
                            <FaTwitter
                                size={30}
                                style={{
                                    color: '#ffffff',
                                    marginRight: '1rem',
                                }}
                            />
                            <FaLinkedin
                                size={30}
                                style={{
                                    color: '#ffffff',
                                    marginRight: '1rem',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
