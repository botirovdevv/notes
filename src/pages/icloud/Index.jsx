import React, { useState } from 'react'
import IcloudVideo from './IcloudVideo'
import { Link } from 'react-router-dom'
import Login from '../../layout/Notes/header/Login'

function Index() {

  return (
    <section className='index'>
        <div className="container">
            <div className="index-content">
                <IcloudVideo/>
                <h1 className='index-title'>iCloud</h1>
                <Link to="/login" className='main-btn' >Войти/</Link>
                <p className="index-subtitle">Лучшее место для хранения фотографий, файлов, заметок, почты и многого другого.</p>
            </div>
        </div>
    </section>
  )
}

export default Index