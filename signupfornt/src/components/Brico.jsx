import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './BricoStyles.css';
import Footer from './Footer';

function Brico() {
    const local = localStorage;
    const navigate = useNavigate();
    const [Edan, setEdan] = useState('{}');
    const [Riad, setRiad] = useState('{}');
    const [Jasmin, setJasmin] = useState('{}');

    function EdanFunction() {
        const pickEdan = {
            name: 'Edan',
        };
        setEdan(pickEdan);
    }

    function JasminFunction() {
        const pickJasmin = {
            name: 'Jasmin',
        };
        setJasmin(pickJasmin);
    }

    function RiadFunction() {
        const pickRiad = {
            name: 'Riad',
        };
        setRiad(pickRiad);
    }
    useEffect(() => {
        local.setItem('Barber', JSON.stringify(Edan));
    }, [local, Edan]);

    useEffect(() => {
        local.setItem('Barber', JSON.stringify(Riad));
    }, [local, Riad]);
    useEffect(() => {
        local.setItem('Barber', JSON.stringify(Jasmin));
    }, [local, Jasmin]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <div class='containerx'>
                <main class='grid'>
                    <article>
                        <img src='./assests/images1.png' alt='' />
                        <div class='text'>
                            <h3>EDAN</h3>
                            <p>opis</p>
                            <button onClick={EdanFunction}>SELECT</button>
                        </div>
                    </article>

                    <article>
                        <img src='./assests/images2.png' alt='' />
                        <div class='text'>
                            <h3>RIAD</h3>
                            <p>opis</p>
                            <button onClick={RiadFunction}>SELECT</button>
                        </div>
                    </article>

                    <article>
                        <img src='./assests/3.png' alt='' />
                        <div class='text'>
                            <h3>JASMIN</h3>
                            <p>opis</p>
                            <button onClick={JasminFunction}>SELECT</button>
                        </div>
                    </article>
                </main>
            </div>

            <Link to='/treatment'>
                <button className='nexty'>Pick your Treatment</button>
            </Link>
            <Footer />
        </div>
    );
}

export default Brico;
