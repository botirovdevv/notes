import React from 'react'
import noteImg from "../../assets/images/notes.png"
import Login from '../../layout/Notes/header/Login'

function Main() {
  return (
    <main className="main">
        <div className="container">
            <div className="main-content">
                <img src={noteImg} className='main-image' alt="notes-app-icon" />
                <h1 className="main-title">Заметки</h1>
                <p className="main-subtitle">Записывайте свои мысли или делайте подробные заметки. Ваши заметки синхронизируются на всех устройствах и в браузере.</p>
                <button className='main-btn'>Войти</button>
            </div>
            <div className="main-modal">
              <Login/>
            </div>
        </div>
    </main>
  )
}

export default Main