import React, { useRef, useState } from 'react'
import appleIdImg from '../assets/images/appleid.svg'
import Navbar from '../layout/icloud/Navbar'
import { Link } from 'react-router-dom';

function Email() {
    
    const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const inputsRef = useRef([]);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    setError('');

    // Move to the next input
    if (value !== '' && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      const newOTP = [...otp];
      newOTP[index - 1] = '';
      setOTP(newOTP);
      inputsRef.current[index - 1].focus();
    }
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const enteredOTP = otp.join('');
      // Here you can add your OTP verification logic
      // For simplicity, let's just check if OTP is exactly 6 digits
      if (enteredOTP.length !== 6) {
        setError('OTP must be 6 digits long');
      } else {
        // Handle OTP verification here
        console.log('OTP Verified:', enteredOTP);
      }
    };
  return (
    <section className="email">
        <Navbar/>
        <div className="container">
            <div className="email-card">
                <div className="email-content">
                    <img src={appleIdImg} className='login-image' alt="Apple ID" />
                    <h1 className='email-title'>Two-Factor Authentication</h1>

                    <form className="email-form">
                        <div className="email-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(ref) => (inputsRef.current[index] = ref)}
                                type="text"
                                className='email-input'
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOTPChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                            />
                            ))}
                        </div>
                        <Link className='email-link'>verify</Link>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Email