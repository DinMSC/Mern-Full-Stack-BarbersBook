import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style.css';

function Register() {
    const [login, setLogin] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
    });

    function handleChange(event) {
        const { value, name } = event.target;

        setLogin((prevValue) => {
            if (name === 'fN') {
                return {
                    fullName: value,
                    phone: prevValue.phone,
                    email: prevValue.email,
                    password: prevValue.password,
                };
            } else if (name === 'pH') {
                return {
                    fullName: prevValue.fullName,
                    phone: value,
                    email: prevValue.email,
                    password: prevValue.password,
                };
            }
            if (name === 'eM') {
                return {
                    fullName: prevValue.fullName,
                    phone: prevValue.phone,
                    email: value,
                    password: prevValue.password,
                };
            }
            if (name === 'pW') {
                return {
                    fullName: prevValue.fullName,
                    phone: prevValue.phone,
                    email: prevValue.email,
                    password: value,
                };
            }
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        const registered = {
            fullName: login.fullName,
            phone: login.phone,
            email: login.email,
            password: login.password,
        };
        axios
            .post('http://localhost:4000/app/register', registered)
            .then((res) => console.log(res.data));
        swal({
            title: 'Success!',
            text: 'User Registered',
            icon: 'success',
            button: 'OK!',
        });
        setLogin({
            fullName: '',
            phone: '',
            email: '',
            password: '',
        });
    }

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='form'>
                    <form onSubmit={onSubmit}>
                        <input
                            name='fN'
                            type='text'
                            placeholder='Enter Full Name'
                            onChange={handleChange}
                            value={login.fullName}
                        />
                        <input
                            name='pH'
                            type='text'
                            placeholder='Phone Number'
                            onChange={handleChange}
                            value={login.phone}
                        />
                        <input
                            name='eM'
                            type='text'
                            placeholder='Enter Email'
                            onChange={handleChange}
                            value={login.email}
                        />
                        <input
                            name='pW'
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            value={login.password}
                        />

                        <input
                            className='btn btn-danger btn-block'
                            type='submit'
                            value='Register'
                        />
                    </form>
                    <Link to='/login'>
                        <button className='btn' type='button'>
                            Login!
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
