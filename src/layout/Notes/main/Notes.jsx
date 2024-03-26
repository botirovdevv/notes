 import React, { useState } from 'react'
import 'boxicons'
import { notesData } from '../../../data/notesData';

function Notes() {
    const [clickedButton, setClickedButton] = useState(null);
    const [show, setShow] = useState(false)

    const handleClick = (buttonId) => {
      if (clickedButton === buttonId) {
        setClickedButton(null);
        setShow(false)
      } else {
        setClickedButton(buttonId);
        setShow(true)
      }
    };

    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
        setValue(e.target.value.trim());
        const inputValue = e.target.value;
        setValue(inputValue)
    }

    const valueClear = () => {
        setValue('')
    }

    const [modalShow, setModalShow] = useState(false)

    const toggleModal = () => {
        setModalShow(!modalShow)
    }

    const [activeButton, setActiveButton] = useState(null);
    const [style, setStyle] = useState(false)

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        setStyle(true)
        console.log(style);
    };


  return (
        <section className="notes">
            <div className="container">
            <div className="notes-app">
                <div className="notes-content">
                    <div className="notes-items">
                        <box-icon name='search' color='gray'></box-icon>
                        <input type="text" className='notes-input' placeholder='Search all notes' />
                    </div>
                    <div className="notes-elements">
                        {
                            notesData.map((item) => (
                                 <div className={`notes-element ${clickedButton === item.id ? 'notes-element active' : 'notes-element'}`}  onClick={() => handleClick(item.id)}>
                                    <h1 className='notes-title'>{item.name}</h1>
                                    <p className='notes-date'>{item.date}</p>

                                    <div className="notes-info">
                                        <span className='notes-info__tile'>{item.file}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={show ? "note-content show" : "note-content"}>
                    <nav className='note-navbar'>
                        <div className="note-icon">
                            <button className='note-btn' onClick={valueClear}>
                                <box-icon name='trash' color='#ebb800' ></box-icon>
                            </button>
                        </div>
                        <div className="note-items">
                            <div className={modalShow ? "note-modal show" : "note-modal"}>
                            <div className="note-bg"></div>
                                <div className="note-modal_items">
                                    <button className='note-bold'> <b>B</b></button>
                                    <button className='note-italic'>i</button>
                                    <button className='note-underline'>U</button>
                                    <button className='note-through'>S</button>
                                </div>
                                <div className="note-editors">
                                    <div className="note-editor_items">
                                        <div className={activeButton === 1 ?  "note-check active" : "note-check"}>
                                            <box-icon name='check'></box-icon>
                                        </div>
                                        <button className="note-bold_title" onClick={() => handleButtonClick(1)}><b>Title</b></button>
                                    </div>
                                    <div className="note-editor_items">
                                        <div className={activeButton === 2 ?  "note-check active" : "note-check"}>
                                            <box-icon name='check'></box-icon>
                                        </div>
                                        <button className="note-heading" onClick={() => handleButtonClick(2)}><b>Heading</b></button>
                                    </div>
                                    <div className="note-editor_items">
                                        <div className={activeButton === 3 ?  "note-check active" : "note-check"}>
                                            <box-icon name='check'></box-icon>
                                        </div>
                                        <button className="note-subheading" onClick={() => handleButtonClick(3)}><b>Subheading</b></button>
                                    </div>
                                    <div className="note-editor_items">
                                        <div className={activeButton === 4 ?  "note-check active" : "note-check"}>
                                            <box-icon name='check'></box-icon>
                                        </div>
                                        <button className="note-body" onClick={() => handleButtonClick(4)}>Body</button>
                                    </div>  
                                    <div className="note-editor_items">
                                        <div className={activeButton === 5 ?  "note-check active" : "note-check"}>
                                            <box-icon name='check'></box-icon>
                                        </div>
                                        <button className="note-monospaced" onClick={() => handleButtonClick(5)}>Monospaced</button>
                                    </div> 
                                    <div className="note-list">
                                        <div className="note-editor_items">
                                            <div className={activeButton === 6 ?  "note-check active" : "note-check"}>
                                                <box-icon name='check'></box-icon>
                                            </div>
                                            
                                            <button className="note-bullet" onClick={() => handleButtonClick(6)}>
                                                <span className='note-bullet_icon'>·</span>
                                                Bullet List
                                            </button>
                                        </div> 
                                        <div className="note-editor_items">
                                            <div className={activeButton === 7 ?  "note-check active" : "note-check"}>
                                                <box-icon name='check'></box-icon>
                                            </div>
                                            <button className="note-dashed" onClick={() => handleButtonClick(7)}>- Dashed List</button>
                                        </div> 
                                        <div className="note-editor_items">
                                            <div className={activeButton === 8 ?  "note-check active" : "note-check"}>
                                                <box-icon name='check'></box-icon>
                                            </div>
                                            <button className="note-number" onClick={() => handleButtonClick(8)}>1.Numbered List</button>
                                        </div> 
                                        </div>
                                </div>
                            </div>
                            <button className={modalShow ? 'note-edit active' : 'note-edit' } onClick={toggleModal}>Aa</button>
                            <button className='note-btn'>
                                <box-icon name='grid' color='#ebb800'></box-icon>
                            </button>
                        </div>
                        <div className="note-add">
                            <button className="note-btn">
                                <box-icon name='add-to-queue' color='#ebb800'></box-icon>
                            </button>
                        </div>
                    </nav>
                    <textarea name="" className={style ? 'note-input bold': "note-input"} onChange={handleInputChange} value={value}></textarea>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Notes