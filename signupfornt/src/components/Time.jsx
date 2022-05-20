import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Time() {
    const local = localStorage;
    const navigate = useNavigate();
    const [time, setTime] = useState({ times: '' });

    function timeHandler1() {
        setTime({
            times: '12h',
        });
    }
    function timeHandler2() {
        setTime({
            times: '13h',
        });
    }
    function timeHandler3() {
        setTime({
            times: '14h',
        });
    }
    function timeHandler4() {
        setTime({
            times: '15h',
        });
    }
    function timeHandler5() {
        setTime({
            times: '16h',
        });
    }
    function timeHandler6() {
        setTime({
            times: '17h',
        });
    }
    function timeHandler7() {
        setTime({
            times: '18h',
        });
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const treatment = JSON.parse(localStorage.getItem('Treatment'));
        if (treatment === '{}') {
            localStorage.removeItem('Treatment');
            navigate('/treatment');
            alert('Select a treatment');
        }
    }, [navigate]);

    useEffect(() => {
        local.setItem('Time', JSON.stringify(time));
    }, [local, time]);

    return (
        <div>
            <div class='containerx'>
                <main class='grid'>
                    <article>
                        <img src='./assests/number-12.png' alt='' />
                        <div class='text'>
                            <h3>12pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler1}>SELECT</button>
                        </div>
                    </article>

                    <article>
                        <img src='./assests/number-13.png' alt='' />
                        <div class='text'>
                            <h3>13pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler2}>SELECT</button>
                        </div>
                    </article>

                    <article>
                        <img src='./assests/number-14.png' alt='' />
                        <div class='text'>
                            <h3>14pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler3}>SELECT</button>
                        </div>
                    </article>
                    <article>
                        <img src='./assests/number-15.png' alt='' />
                        <div class='text'>
                            <h3>15pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler4}>SELECT</button>
                        </div>
                    </article>
                    <article>
                        <img src='./assests/number-16.png' alt='' />
                        <div class='text'>
                            <h3>16pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler5}>SELECT</button>
                        </div>
                    </article>
                    <article>
                        <img src='./assests/number-17.png' alt='' />
                        <div class='text'>
                            <h3>17pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler6}>SELECT</button>
                        </div>
                    </article>
                    <article>
                        <img src='./assests/number-18.png' alt='' />
                        <div class='text'>
                            <h3>18pm</h3>
                            <p>opis</p>
                            <button onClick={timeHandler7}>SELECT</button>
                        </div>
                    </article>
                </main>
            </div>

            <Link to='/myinfo'>
                <button className='nexty'>See your Appointment!</button>
            </Link>
            <Footer />
        </div>
    );
}

export default Time;
