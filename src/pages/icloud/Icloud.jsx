import React from 'react'
import img from '../../assets/images/icloud.jpeg'
import calendar from '../../assets/images/calendar.png'
import drive from '../../assets/images/drive.png'
import mail from '../../assets/images/mail.png'
import notes from '../../assets/images/notes.png'
import reminder from '../../assets/images/reminder.png'
import 'boxicons'
import { Link } from 'react-router-dom'
import { appsData } from '../../data/appsData'

function Icloud() {
  return (
    <section className='icloud'>
      <div className="container">
        <div className="icloud-box1">
          <div className="icloud-min_card">
            <img src={img} className='icloud-image' alt="profile image" />

            <div className="icloud-text">
              <h1 className='icloud-name'>Mustafo</h1>
              <h2 className='icloud-email'>usmon@icloud.com</h2>
              <span className='icloud-title'>iCloud</span>
            </div>
          </div>
          <div className="icloud-max-card">
            <nav className='icloud-card_navbar'>
              <div className="icloud-card_items">
                <div>
                  <img src={calendar} alt="calendar photo" />
                </div>
                <div>
                  <h1 className='icloud-card_name'>Calendar</h1>
                  <div className="icloud-mission">
                    <box-icon name='calendar' size="xs" color="red"></box-icon>
                    <p className='icloud-card_subtitle'>Все календари</p>
                  </div>
                </div>
              </div>

                <button className='icloud-calendar_add'>
                  <box-icon name='plus' color="red"></box-icon>
                </button>
            </nav>
          </div>
        </div>
        <div className="icloud-box2">
          <div className="icloud-max-card">
            <nav className='icloud-card_navbar'>
              <div className="icloud-card_items">
                <div className='icloud-drive'>
                  <img src={drive} className='icloud-drive' alt="calendar photo" />
                </div>
                <div>
                  <h1 className='icloud-card_name'>Drive</h1>
                  <div className="icloud-mission">
                    <box-icon name='time' size="xs" rotate='270' ></box-icon>
                    <p className='icloud-card_subtitle'>Недавние</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="icloud-min">
            <div className="icloud-card_navbar">
              <div className='icloud-info'>
                <img src={mail} className='icloud-drive' alt="mail photo" />
                <div className="icloud-text">
                  <h1 className='icloud-card_name'>Mail</h1>
                  <div className="icloud-mission">
                    <box-icon name='folder'></box-icon>
                    <p className="icloud-card_subtitle">Bir balola</p>
                  </div>
                </div>
              </div>
                <button>
                  <box-icon name='add-to-queue'></box-icon>
                </button>
            </div>
          </div>
        </div>
        <div className="icloud-box2">
          <div className="icloud-min">
            <div className="icloud-card_navbar">
              <div className='icloud-info'>
                <img src={notes} className='icloud-drive' alt="mail photo" />
                <div className="icloud-text">
                  <h1 className='icloud-card_name'>Notes</h1>
                  <div className="icloud-mission">
                    <box-icon name='folder' color='#ebb800'></box-icon>
                    <p className="icloud-card_subtitle">All iCloud</p>
                  </div>
                </div>
              </div>
                <button>
                  <box-icon name='add-to-queue' color='#ebb800'></box-icon>
                </button>
            </div>
          </div>
          <div className="icloud-max-card">
            <nav className='icloud-card_navbar'>
              <div className="icloud-card_items">
                <div>
                  <img src={reminder} className='icloud-drive' alt="calendar photo" />
                </div>
                <div>
                  <h1 className='icloud-card_name'>Reminders</h1>
                  <div className="icloud-mission">
                    <box-icon name='folder' color="#000"></box-icon>
                    <p className='icloud-card_subtitle'>All iCloud</p>
                  </div>
                </div>
              </div>

                <button className='icloud-calendar_add'>
                <box-icon name='plus' color='#0071e3' ></box-icon>
                </button>
            </nav>
          </div>
        </div>
        
        <div className="icloud-apps">
          <div className="icloud-apps_content">
            <div className="icloud-app">
              {
                appsData.map((item, key) => (
                  <Link to={item.to} className="icloud-app_link">
                    <img src={item.img} className='icloud-app_image' alt="" />
                    <span className='icloud-app_name'>{item.title}</span>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Icloud