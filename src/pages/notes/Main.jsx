import React from 'react'
import noteImg from "../../assets/images/notes.png"
import { Link } from 'react-router-dom'

function Main() {
  return (
    <main className="main">
        <div className="container">
            <div className="main-content">
                <img src={noteImg} className='main-image' alt="notes-app-icon" />
                <h1 className="main-title">Заметки</h1>
                <p className="main-subtitle">Записывайте свои мысли или делайте подробные заметки. Ваши заметки синхронизируются на всех устройствах и в браузере.</p>
                <Link to="/login" className='main-btn'>Войти</Link>
                
            </div>
        </div>
    </main>
  )
}

export default Main