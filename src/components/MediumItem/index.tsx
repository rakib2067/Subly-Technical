import React, { useState } from 'react'
import { Medium } from '../../models/Medium'
import './index.css'

import warningIcon from '../../images/warning.png'


export const MediumItem: React.FC<{item: Medium}> = ({item}) => {
  const [show,setShow]= useState(false)
  let overlay;
  if(item.status=='ready'){
    overlay=
    <div className={`overlay ${!show? 'hide':' overlay--ready'}`} >
      <button className="btn btn--edit">Edit</button>
      <svg className='card--icon' xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"/></svg>
      <span className='languages'>{item.languages.length >1? `${item.languages.length} languages` : `${item.languages.length} language`}</span>
  </div>
  }
  else if (item.status=='error'){
    overlay=
    <div className='overlay overlay--error'>
      <div className='error--container'>
      <img className='warning' src={warningIcon} alt="" /><p className='error--text'>An error has occurred while processing your file. Delete File to try again, and report issue if the problem persists.</p>
      </div>
      <div className='btn--container'>
        <button className='btn btn--error btn--delete'>Delete File</button>
        <button className='btn btn--error btn--report'>Report Issue</button>
      </div>
    </div>
  }
  else if (item.status=='transcribing'){
    overlay=
    <div className='overlay overlay--transcribing'>
      <h3>Transcribing Subtitles</h3>

      <div className="progress">
      
      </div>
    </div>
  }
  return (
    <li className={`medium ${item.status}`} onMouseOut={()=>setShow(false)} onMouseOver={()=> setShow(true)}>
        <div className='img--container'>
        <img className='card--image' src={item.cover} alt="" />
        {overlay}
        </div>
        <div className="card--bottom">
          <h3 className='card--title'>{item.name}</h3>
          <p className='card--status'>
          {!item.errorMessage && item.status!=='transcribing'&& `Edited ${item.timeDifference} ago` }
          {item.errorMessage && `${item.errorMessage}` }
          {item.status==='transcribing' && 'Transcribing' }
          </p>
          
        </div>
    
    </li>
  )
}


