import React, { useState } from 'react'
import Main from './Main'
import Notes from '../../layout/Notes/main/Notes'
import IcloudNavbar from '../icloud/IcloudNavbar'
import NotesNavbar from '../../layout/Notes/header/NotesNavbar'
import Navbar from '../../layout/icloud/Navbar'

function IndexNotes() {
  const [logged, setLogged] = useState(false)
  const [value, setValue] = useState(null)

  const inputChange = (e) => {
    const inputValue = e.target.value;

    setValue(inputValue)
  }

  const login = () => {
    if(value === ''){
      alert('xato parol')
    } else if (value === 'apple'){
      setLogged(true)
    } else(
      alert('parol xato')
    )
  }
  return (
    <div className="wrapper">
      {
        logged ?
        <div>
          <Notes/>
          <NotesNavbar/>
        </div> 
        :
        
        
        <div>
          <div className="notes-">
            <input className='notes-login' onChange={inputChange} type="password" value={value}/>
            <button onClick={login}>enter</button>
          </div>
          <Navbar/>
        <Main/>
    </div>
      }

    </div>
  )
}

export default IndexNotes