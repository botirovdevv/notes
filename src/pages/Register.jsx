import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className="register">
        <div className="register-bg"></div>
        <div className="container">
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
                                    <input type="email" className='register-input' placeholder=''/>
                                </div>

                            </form>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register