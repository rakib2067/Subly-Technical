import React from 'react'
import { Medium } from '../../models/Medium'
import { MediumItem } from '../MediumItem'

import './index.css'

export const Mediums: React.FC<{items: Medium[]}>=({items})=> {
  return (
    <ul className='medium--list'>{items.map(item=> <MediumItem item={item}/>)}</ul>
  )
}
