import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-items">
                <div>
                    <h1 className="navbar-title">Mustafo</h1>
                </div>

                <div className="navbar-users">
                    <img className='navbar-img' src="../src/assets/images/jobs.jpeg" alt="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar