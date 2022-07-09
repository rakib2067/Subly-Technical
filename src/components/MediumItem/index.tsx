import React from 'react'
import { Medium } from '../../models/Medium'
import './index.css'

// interface CardProps{
//     id:number;
//     name:string;
//     cover:string;
//     status:'ready'|'error'|'transcribing';
//     createdAt: Date;
// }


export const MediumItem: React.FC<{item: Medium}> = ({item}) => {
  return (
    <li className='medium'>
        <div>

        <img src={item.cover} alt="" />
        </div>
        <div className="cardBottom">
          <h3>{item.name}</h3>
          {!item.errorMessage && item.status!=='transcribing'&& <p>Edited {item.timeDifference} ago</p> }
          {item.errorMessage && <p>{item.errorMessage}</p> }
          {item.status==='transcribing' && <p>Transcribing</p> }
          
        </div>
    
    </li>
  )
}


