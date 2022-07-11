import React, { useState } from 'react'
import { Medium } from '../../models/Medium'
import { MediumItem } from '../MediumItem'

import './index.css'

export const Mediums: React.FC<{items: Medium[],languages:string[]}>=({items,languages})=> {
  const [status,setStatus]= useState('all')
  const [language,setLanguage]= useState('all')


  //Filter based on user options
  let filteredList: Medium[]=[]
  if(status==='all' && language==="all")
    filteredList=items
  else if(status!=='all' && language!=="all"){
    filteredList=items.filter(item=> item.status===status && item.languages.includes(language))
  }
  else if(status!=='all'){
    filteredList=items.filter(item=> item.status===status)
  }else{
    filteredList=items.filter(item=> item.languages.includes(language))
  }

  

  function handleStatusChange(e:React.ChangeEvent<HTMLSelectElement>): void{
    setStatus(e.target.value)
  }

  function handleLanguageChange(e:React.ChangeEvent<HTMLSelectElement>):void{
    setLanguage(e.target.value)
  }
  
  return (
    <>
  <select onChange={handleStatusChange} value={status} name="mediums" id="mediums">
  <option value="none" disabled hidden>Select an Option</option>
      <option value="all">Any</option>
      <option value="ready">Ready</option>
      <option value="transcribing">Transcribing</option>
      <option value="error">Error</option>
  </select>    


  <select onChange={handleLanguageChange} value={language} name="languages" id="languages">
  <option value="none"  disabled hidden>Select an Option</option>
  <option value="all">Any</option>
    {languages.map(language=> <option value={language}>{language}</option>)}
  </select>    


  <ul className='medium--list'>{filteredList.map(item=> <MediumItem item={item}/>)}</ul>
    </>
  )
}
