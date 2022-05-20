import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style.css';

function Login() {
    const [data, setData] = useState([]);
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });
    function handleChange(event) {
        const { value, name } = event.target;

        setLogin((prevValue) => {
            if (name === 'uN') {
                return {
                    username: value,
                    password: prevValue.password,
                };
            } else if (name === 'pW') {
                return {
                    username: prevValue.username,
                    password: value,
                };
            }
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        const loggedIn = {
            username: login.username,
            password: login.password,
        };
        axios
            .post('http://localhost:4000/app/login', loggedIn)
            .then((res) => setData(res.data));
        setLogin({
            username: '',
            password: '',
        });
    }
    console.log(data);
    if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/brico';
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='form'>
                    <form onSubmit={onSubmit}>
                        <input
                            name='uN'
                            type='text'
                            placeholder='Enter Phone or Email'
                            onChange={handleChange}
                            value={login.username}
                            className='form-control form-group'
                        />
                        <input
                            name='pW'
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            value={login.password}
                            className='form-control form-group'
                        />
                        <input
                            type='submit'
                            className='btn btn-danger btn-block'
                            value='Submit!'
                        />
                        <p style={{ color: 'white' }}>
                            {' '}
                            Don't have a account?{' '}
                        </p>
                        <Link style={{ textDecoration: 'none' }} to='/register'>
                            <p
                                style={{
                                    color: '#f1c301',
                                }}
                            >
                                Register
                            </p>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
