import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
// import axios from "axios";


const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',


  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Basic validation, you can add more complex validation rules
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (action === 'Sign Up' && !formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, you can perform your sign-up or sign-in logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='full'>
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Sign In' ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              name="name"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>
      {action === 'Sign Up' ? null : (
        <div className="forgot-password">
          Forgot password ?<span>Click Here!</span>
        </div>
      )}
      {action === 'Sign In' ? null : (
        <div className="forgot-password">
          Forgot password ?<span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
      <div className="submit" onClick={handleSubmit}>
        Submit
      </div>

        <div
          className={action === 'Sign In' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
            setErrors({});
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign In');
            setErrors({});
          }}
        >
          Sign In
        </div>
      </div>
      
    </div>

    </div>
  );
};

export default LoginSignup;