import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointCss.css';
import Footer from './Footer';

function Appointment() {
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const time = JSON.parse(localStorage.getItem('Time'));
        if (time === '{}') {
            localStorage.removeItem('Time');
            navigate('/time');
            alert('Select a time');
        }
    }, [navigate]);

    const time = JSON.parse(localStorage.getItem('Time'));
    const barber = JSON.parse(localStorage.getItem('Barber'));
    const treatment = JSON.parse(localStorage.getItem('Treatment'));
    const tok = localStorage.getItem('token');

    appointment.push(time, barber, treatment);

    const test = { ...time, ...barber, ...treatment };
    //console.log(test);

    const send = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${tok}`,
            },
        };

        axios.post(
            'http://localhost:4000/app/myinfo?',
            {
                times: test.times,
                name: test.name,
                treatment: test.treatment,
                price: test.price,
            },
            config
        );
        window.location.reload();
    };

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${tok}`,
            },
        };
        axios
            .get('http://localhost:4000/app/myinfo?', config)
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <ul>
                {data.map((data) => {
                    return (
                        <div class='banneryx'>
                            <div class='navbaryx'>
                                <ul key={data.id}>
                                    <li>{data.name}</li>
                                    <li>{data.treatment}</li>
                                    <li>{data.times}</li>
                                    <li>{data.price}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </ul>
            <button className='nexty' onClick={send}>
                Upload Appoint
            </button>
            <Footer />
        </div>
    );
}

export default Appointment;
