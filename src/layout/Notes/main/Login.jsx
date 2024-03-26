import React, { useState } from 'react'
import appleIdImg from '../../../assets/images/appleid.svg'
import 'boxicons'
import { Link } from 'react-router-dom'
import IcloudNavbar from '../../../pages/icloud/IcloudNavbar'
import Icloud from '../../../pages/icloud/Icloud'
import Navbar from '../../icloud/Navbar'

function Login() {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [logged, setLogged] = useState(false)
  const [hide, setHide] = useState(false)
  const [password, setPassword] = useState(false)
  const [passwordIcon, setPasswordIcon] = useState(false)

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value.trim());
    const passwordInputValue = e.target.value;
    setPasswordValue(passwordInputValue)
    setPasswordIcon(true)

    setPassword(passwordInputValue.trim() !== '');
  };

  const handleInputChange = (e) => {
    setValue(e.target.value.trim());
    const inputValue = e.target.value;
    setValue(inputValue)

    setShow(inputValue.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!show) {
      alert('Iltimos, maydonni to\'ldiring!');
      return;
    } else{
      setOpen(true);
    }
  }

  console.log(logged);

  const handlePasswordSubmit = () => {
      setLogged(true)
  }

  const clickBtn = () => {
    setHide(true)
    setPasswordIcon(true)
  }

  return (
    <div className="app">
      {
        logged ?
        <div>
          <IcloudNavbar/>
          <Icloud/>
        </div>
        :
        <div>
          <section className='login'>
          <Navbar/>
            <div className="container">
              <div className="login-card">
                <div className="login-content">
                    <img src={appleIdImg} className='login-image' alt="Apple ID" />
                    <h1 className='login-title'>Bход в систему с Apple ID</h1>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className="login-items">
                          <input
                            type="text"
                            className='login-input'
                            onChange={handleInputChange}
                            value={value}
                            placeholder='E-mail or phone numer'
                          />
                          <button
                            disabled={!show}
                            style={{ cursor: show ? 'pointer' : 'no-drop' }}
                            onClick={clickBtn}
                            className={hide ? 'login-submit hide' : "login-submit"}
                            type='submit' 
                          >
                            <span className={'login-submit_icon'}>
                              <box-icon name='right-arrow-circle' size="md" color={show ? "#494949" : "gray"}></box-icon>
                            </span>
                          </button>
                          <div className="login-password_box">
                            <input type="pasword" placeholder='password' className={open ? 'login-password show' : 'login-password'} value={passwordValue}  onChange={handlePasswordChange}/>
                            <button disabled={!password} style={{ cursor: show ? 'pointer' : 'no-drop' }} type='submit' onClick={handlePasswordSubmit}>
                              <span className={passwordIcon ? 'login-password_icon active' : 'login-password_icon'}>
                                  <box-icon name='right-arrow-circle' size="md" color={password ? "#494949" : "gray"}></box-icon>
                              </span>
                            </button>

                          </div>
                        </div>
                        <div className="login-check">
                          <input type="checkbox"  className='login-check_box'/>
                          <span className='login-check_title'>Оставаться в системе</span>
                        </div>
                        <a href="#" className='login-link'>Забыли пароль?</a>
                        <Link to='/register' className='login-link'>Create an Apple ID</Link>
                    </form>
                </div>
              </div>
            </div>
          </section>
        </div>

      }

    </div>
  )
}

export default Login