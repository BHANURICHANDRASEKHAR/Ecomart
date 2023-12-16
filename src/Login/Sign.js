import React, { useState } from 'react';
import './sign1.css';
import img1 from '../imgs/sign-up.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [error,seterror]=useState('')
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    phnumber: '',
  });

  axios.defaults.withCredentials = true;

  const submit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/signup', values)
      .then((res) => {
        if (res.data.status === 'Success') {
          navigate('/login');
        } else {
          seterror(res.data.Error)
        }
      })
      .catch((err) => {
        console.log('unsuccess', err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <div
        className='center_signup'
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '78%',
          height: '50vh',
        }}
      >
        <div className='signup-grid'>
          <div className='signup_grid_item'>
            <img src={img1} className='signup-grid-item-img'  alt='Signup' />
          </div>
          <div className='signup_grid-item'>
            <form>
              <h2>Signup</h2>
              <div className='row1'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  autoComplete='off'
                  placeholder='Enter your name'
                  onChange={handleChange}
                />
              </div>
              <div className='row1'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  autoComplete='off'
                  placeholder='email@example.com'
                  onChange={handleChange}
                />
              </div>
              <div className='row1'>
                <label htmlFor='phnumber'>Number</label>
                <input
                  type='number'
                  name='phnumber'
                  onChange={handleChange}
                />
              </div>
              <div className='row1'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                />
              </div>
              <div className='row1'>
                <label htmlFor='repassword'>Re-enter Password</label>
                <input
                  type='password'
                  name='repassword'
                  onChange={handleChange}
                />
              </div>
              <spna style={{color:'red'}}>{error}</spna>
              <button
                type='submit'
                className='signup_button'
                onClick={submit}
              >
                Submit
              </button>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <button className='donthaveaccount'>
                  Already have an account
                </button>
                <br />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
