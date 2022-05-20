import React from 'react';
import './FormStyles.css';

const Form = () => {
    return (
        <div>
            <form className='cform'>
                <label>Your Name</label>
                <input type='text' placeholder='Name'></input>
                <label>Email</label>
                <input type='email' placeholder='Email'></input>
                <label>Subject</label>
                <input type='text' placeholder='Subject'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
