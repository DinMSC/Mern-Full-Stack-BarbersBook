import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Treatment() {
    const local = localStorage;
    const navigate = useNavigate();
    const [šiš, setŠiš] = useState({});
    const [šib, setŠib] = useState({});

    function šišanje() {
        const mali = {
            treatment: 'Haircut',
            price: 15,
        };
        setŠiš(mali);
    }
    function šišanjeB() {
        const veliki = {
            treatment: 'Haircut and Beard',
            price: 20,
        };
        setŠib(veliki);
    }

    useEffect(() => {
        local.setItem('Treatment', JSON.stringify(šiš));
    }, [local, šiš]);

    useEffect(() => {
        local.setItem('Treatment', JSON.stringify(šib));
    }, [local, šib]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const barber = JSON.parse(localStorage.getItem('Barber'));
        if (barber === '{}') {
            localStorage.removeItem('Barber');
            navigate('/brico');
            alert('Select a barber');
        }
    }, [navigate]);

    return (
        <div>
            <div class='containerx'>
                <main class='grid'>
                    <article>
                        <img src='./assests/Kosa.webp' alt='' />
                        <div class='text'>
                            <h3> HairCut</h3>

                            <p>opis</p>
                            <button onClick={šišanje}>SELECT</button>
                        </div>
                    </article>

                    <article>
                        <img src='./assests/Kosa.webp' alt='' />
                        <div class='text'>
                            <h3>HairCut&Beard</h3>
                            <p>opis</p>
                            <button onClick={šišanjeB}>SELECT</button>
                        </div>
                    </article>
                </main>

                <Link to='/time'>
                    <button className='nexty'>Pick your Time!</button>
                </Link>
                <Footer />
            </div>
        </div>
    );
}

export default Treatment;
