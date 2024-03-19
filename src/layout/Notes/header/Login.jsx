import React, { useState } from 'react'
import appleIdImg from '../../../assets/images/appleid.svg'
import 'boxicons'

function Login() {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

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
      console.log(open);
    }

  }


  return (
    <section className='login'>
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
                      className='login-submit'
                      type='submit' 
                    >
                      <box-icon name='right-arrow-circle' size="md" color={show ? "#494949" : "gray"}></box-icon>
                    </button>
                    <input type="pasword" placeholder='password' className={open ? 'login-password show' : 'login-password'} />
                    
                  </div>
                  <div className="login-check">
                    <input type="checkbox"  className='login-check_box'/>
                    <span className='login-check_title'>Оставаться в системе</span>
                  </div>
                  <a href="#" className='login-link'>Забыли пароль?</a>
                  <a href="#" className='login-link'>Создать Apple ID</a>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login