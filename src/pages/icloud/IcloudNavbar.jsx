import React, { useState } from 'react'

function IcloudNavbar() {
  const [open, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(!open)
    }
  return (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-items">
                <div>
                    <a href="/" className='navbar-logo'>iCloud</a>
                </div>
                <div className="notes-navbar_users">
                    <button className="notes-navbar_add">
                        <box-icon name='plus-circle' color="#fff"></box-icon>
                    </button>
                    <div className="notes-navbar_app">
                        <button className='notes_navbar_grid' onClick={toggleModal}>
                            <box-icon type='solid' color={open ? "#000" : "#fff"} name='grid'></box-icon>
                        </button>
                        <div className={open ? "notes-navbar_modal show" : "notes-navbar_modal"}>
                            <h1 className='notes-navbar_title'>Apps</h1>
                        </div>
                    </div>
                    <button className='notes-navbar_user'>
                        <img className='navbar-img' src="../src/assets/images/jobs.jpeg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default IcloudNavbar