import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import email from '../assets/images/email.png'


function Register() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCheck, setSelectedCheck] = useState('option1');

  const handleChange = (e) => {
    setSelectedCheck(e.target.value);
  };

    const [show, setShow] = useState(false)

    const openModal = () => {
        setShow(true)
    }
  return (
    <section className="register">
            <div className={show ? "email show" : "email"}>
                <div className="email-card">
                  <img src={email} className='email-image' alt="Email" />
                  <h1 className='email-title'>Elektron pochtangizni tasdiqlang!</h1>
                  <a href="#" className='email-link'>Tasdiqlash</a>
                </div>
            </div>
        <div className="register-bg"></div>
            <div className="register-content">
                <div className="register-card">
                        <div className="register-item">
                            <h1 className='register-title'>Create Apple ID</h1>
                        </div>
                        <div className="register-items">
                            <p className='register-intro'>Одного Apple ID достаточно для доступа ко всем сервисам Apple.</p>
                            <p className='register-alredy_have'>
                                Уже есть Apple ID? <Link to="/login" className='register-sigin'>Войдите в систему</Link>
                            </p>
                            <form className='register-form'>
                                <div className="register-name">
                                    <input type="text" placeholder='Name' className='register-input' />
                                    <input type="text" placeholder='Last Name' className='register-input' />
                                </div>
                                <div className="register-dropdown">
                                    <span className='register-country'>COUNTRY/REGION</span>
                                    <select
                                        value={selectedOption}
                                        disabled    
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                        className='register-select'
                                    >
                                        <option value="register-option">Uzbekistan</option>
                                    </select>
                                    <input type="date" className='register-input' placeholder='birthday date'/>
                                    <hr className='register-line'/>
                                </div>
                                <div className="register-email">
                                    <input type="email" className='register-input' placeholder='name@example.com'/>
                                    <div className='register-span'>it's your new Apple ID</div>   
                                    <input type="password" className='register-input' placeholder='password'/>
                                    <input type="password" className='register-input' placeholder='confirm password'/>
                                </div>

                                <div className="register-phone">
                                    <select
                                        value={selectedOption}
                                        disabled    
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                        className='register-select'
                                    >
                                        <option value="register-option">+998 (Uzbekistan)</option>
                                    </select>
                                    <input type="number" className='register-input' placeholder='phone number' />
                                    <p className='register-text'>Provide a phone number that can be used to receive messages or calls with a verification code when you log in.</p>
                                    <div className="register-message">
                                        <h1 className='register-message_title'>Confirmation:</h1>
                                        <div className="register-check">
                                            <label className='register-message_label'>
                                                <input 
                                                    type="radio" 
                                                    className='register-checkbox'
                                                    name="option" 
                                                    value="option1" 
                                                    checked={selectedCheck === 'option1'}
                                                    onChange={handleChange}
                                                /> 
                                            Text message
                                            </label>
                                        </div>
                                        <div className="register-check">
                                            <label className='register-message_label'>
                                                <input 
                                                    type="radio" 
                                                    name="option" 
                                                    className='register-check'
                                                    value="option2" 
                                                    checked={selectedCheck === 'option2'}
                                                    onChange={handleChange}
                                                />
                                            Phone call
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    <div className="register-links">
                        <Link to="/login" className='register-link'>Cencel</Link>
                        <Link className='register-continue' onClick={openModal}>Continue</Link>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Register