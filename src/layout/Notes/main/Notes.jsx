import React from 'react'
import 'boxicons'

function Notes() {
  return (
    <div className="notes-app">
    <section className="notes">
        <div className="container">
            <div className="notes-content">
                <div className="notes-items">
                    <box-icon name='search' color='gray' ></box-icon>
                    <input type="text" className='notes-input' placeholder='Search all notes' />
                </div>

                <div className="notes-elements">
                    <h1 className='notes-title'>Programming</h1>
                    <p className='notes-date'>9/25/2023</p>

                    <div className="notes-info">
                        <span className='notes-info__tile'>Notes</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div className="note-content">
        <div className="note-content">

        </div>
    </div>
    </div>
  )
}

export default Notes